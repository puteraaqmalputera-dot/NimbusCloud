/* Ujian fungsi sebenar; Playwright hanya digunakan sebagai alat pembangunan. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
const site = process.env.NIMBUS_ROOT || path.resolve(__dirname, '..');
const files = Object.fromEntries(['index.html', 'styles.css', 'app.js'].map(name => [name, fs.readFileSync(path.join(site, name), 'utf8')]));
const executablePath = process.env.CHROMIUM_PATH || (fs.existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
const errors = [], unexpected = [], results = [];
const exposed = '\nlet testChart = null; NimbusState.on("chart-ready", ({chart}) => {testChart = chart;}); window.NimbusTest = { calculatePrice, Clock, CloudModel, t, i18n, setLanguage, missingTranslations, createTrafficCSV, parseProviderStatus, chartSamples: () => testChart?.samples || [] };';
let browser;

async function open({ locale = 'en-US', width = 1280, motion = 'reduce' } = {}) {
  const context = await browser.newContext({ locale, viewport: { width, height: 900 }, reducedMotion: motion });
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    if (['fonts.googleapis.com', 'fonts.gstatic.com'].includes(url.hostname)) return route.fulfill({ contentType: 'text/css', body: '' });
    if (['www.vercel-status.com', 'www.githubstatus.com', 'www.cloudflarestatus.com'].includes(url.hostname) && url.pathname === '/api/v2/status.json') {
      return route.fulfill({ contentType: 'application/json', headers: { 'access-control-allow-origin': '*' }, body: JSON.stringify({
        page: { updated_at: '2026-11-01T00:00:00Z' }, status: { indicator: url.hostname === 'www.cloudflarestatus.com' ? 'major' : 'none' }
      }) });
    }
    if (url.hostname === 'nimbus.test') {
      const name = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
      if (Object.hasOwn(files, name)) return route.fulfill({ contentType: name.endsWith('.js') ? 'text/javascript' : name.endsWith('.css') ? 'text/css' : 'text/html', body: files[name] + (name === 'app.js' ? exposed : '') });
    }
    unexpected.push(route.request().url());
    return route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (['warning', 'error'].includes(message.type())) errors.push(message.text()); });
  await page.goto('http://nimbus.test/');
  await page.waitForSelector('html.app-ready');
  return { context, page };
}
const state = page => page.evaluate(() => NimbusState.get());
async function range(page, id, value) { await page.locator('#' + id).evaluate((node, number) => { node.value = number; node.dispatchEvent(new Event('input', { bubbles: true })); }, String(value)); }
async function hidden(page, value) { await page.evaluate(isHidden => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => isHidden }); document.dispatchEvent(new Event('visibilitychange')); }, value); }
async function closeToasts(page) { await page.locator('.toast-close').evaluateAll(nodes => nodes.forEach(node => node.click())); }
async function finishDeploy(page) { await page.waitForFunction(() => !NimbusState.get().deploying && !document.getElementById('deploy-button').disabled, null, { timeout: 15000 }); }

(async () => {
  browser = await chromium.launch({ executablePath, headless: true, args: executablePath ? ['--no-sandbox'] : [] });

  /* Bahasa asal, pilihan tersimpan dan semantik diuji pada asal HTTP. */
  for (const [locale, expected] of [['en-US', 'en'], ['ms-MY', 'ms'], ['id-ID', 'ms']]) {
    const { page, context } = await open({ locale });
    assert.equal(await page.getAttribute('html', 'lang'), expected);
    await page.evaluate(() => NimbusTest.setLanguage('ms'));
    await page.reload();
    assert.equal(await page.getAttribute('html', 'lang'), 'ms');
    await context.close();
  }
  const { page, context } = await open();
  const structure = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map(node => node.id);
    const missing = [];
    for (const node of document.querySelectorAll('[href],[aria-controls],[aria-labelledby],[aria-describedby]')) for (const attribute of ['href', 'aria-controls', 'aria-labelledby', 'aria-describedby']) {
      const value = node.getAttribute(attribute) || '';
      const refs = attribute === 'href' ? (value.startsWith('#') ? [value.slice(1)] : []) : value.split(/\s+/).filter(Boolean);
      missing.push(...refs.filter(id => !document.getElementById(id)));
    }
    return { duplicate: ids.length - new Set(ids).size, missing, keys: NimbusTest.missingTranslations.size };
  });
  assert.deepEqual(structure, { duplicate: 0, missing: [], keys: 0 });

  /* Angka rujukan dan pecahan mesti sepadan hingga sen terakhir. */
  const prices = await page.evaluate(() => {
    const run = NimbusTest.calculatePrice;
    return {
      initial: run({ instances: 3, storage: 100, bandwidth: 3, support: 'priority' }),
      annual: run({ instances: 3, storage: 100, bandwidth: 3, support: 'priority' }, 'yearly'),
      free: run({ instances: 1, storage: 1, bandwidth: 0, support: 'community' }),
      floor: run({ instances: 2, storage: 1, bandwidth: 0, support: 'community' }),
      maximum: run({ instances: 50, storage: 1000, bandwidth: 50, support: 'sla' }),
      maximumAnnual: run({ instances: 50, storage: 1000, bandwidth: 50, support: 'sla' }, 'yearly')
    };
  });
  assert.equal(prices.initial.total, 103.45); assert.equal(prices.annual.total, 82.76);
  assert.equal(prices.free.total, 0); assert.equal(prices.free.plan, 'starter'); assert.equal(prices.floor.total, 79);
  assert.equal(prices.maximum.total, 1530.45); assert.equal(prices.maximumAnnual.total, 1224.36); assert.equal(prices.maximum.contact, true);
  for (const result of Object.values(prices)) assert.equal(Object.values(result.costs).reduce((sum, amount) => sum + Math.round(amount * 100), 0), Math.round(result.total * 100));
  await page.locator('#calc-instances').focus(); await page.keyboard.press('ArrowRight');
  assert.equal(await page.locator('#calc-instances').inputValue(), '4');
  await page.keyboard.press('Shift+ArrowRight'); assert.equal(await page.locator('#calc-instances').inputValue(), '14');
  assert.match(await page.locator('#calculator-total').textContent(), /Contact us/);
  await range(page, 'calc-instances', 3); await page.locator('[data-billing=yearly]').click();
  assert.match(await page.locator('#calculator-total .sr-only').textContent(), /82\.76/);
  assert.match(await page.locator('[data-plan-price=pro] .sr-only').textContent(), /63\.20/);
  await page.locator('[data-select-plan=pro]').click();
  assert.equal((await state(page)).selectedPlan, 'pro');
  await page.locator('#cancel-plan-button').click(); await page.locator('#confirm-action').click();
  await page.waitForFunction(() => !document.getElementById('confirm-dialog').open);
  assert.equal((await state(page)).selectedPlan, 'starter');
  await page.locator('.toast-action:not([hidden])').last().click(); assert.equal((await state(page)).selectedPlan, 'pro');

  /* Polisi statik tetap berfungsi apabila gerakan dikurangkan. */
  await page.locator('#auto-scaling').uncheck();
  await page.evaluate(() => NimbusTest.CloudModel.setInstances(1));
  await range(page, 'traffic-load', 2000);
  assert.equal((await state(page)).cpu, 100); assert((await state(page)).latency > 100);
  await page.locator('#auto-scaling').check();
  assert.equal((await state(page)).instances, 20);
  await range(page, 'traffic-load', 0); assert.equal((await state(page)).instances, 1);
  await range(page, 'traffic-load', 100); await page.locator('[data-action=spike]').click();
  assert.equal((await state(page)).load, 1000); assert((await state(page)).instances > 1);
  assert.equal(await page.locator('#instance-grid [data-instance]').count(), 20);
  await page.locator('[data-instance="1"]').focus(); await page.keyboard.press('End');
  assert.equal(await page.evaluate(() => document.activeElement.dataset.instance), '20');

  /* Peta, palet arahan dan FAQ boleh digunakan tanpa tetikus. */
  await page.locator('[data-region-select=sfo]').click(); assert.equal((await state(page)).region, 'sfo');
  await page.locator('.network-node[data-region=sfo]').focus(); await page.keyboard.press('ArrowRight');
  assert.notEqual((await state(page)).region, 'sfo');
  await page.locator('#service-status').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.getElementById('provider-vercel').dataset.state === 'operational' && document.getElementById('provider-cloudflare').dataset.state === 'major');
  assert.equal(await page.locator('#provider-github').getAttribute('data-state'), 'operational');
  assert.match(await page.locator('#provider-cloudflare .provider-status').textContent(), /Partial outage/);
  assert(await page.locator('#provider-vercel .provider-checked').getAttribute('datetime'));
  await page.evaluate(() => NimbusTest.setLanguage('ms'));
  assert.match(await page.locator('#provider-cloudflare .provider-status').textContent(), /Gangguan sebahagian/);
  assert.match(await page.locator('#provider-vercel .provider-source').getAttribute('aria-label'), /rasmi Vercel/);
  await page.evaluate(() => NimbusTest.setLanguage('en'));
  const invalidStatus = await page.evaluate(() => { try { NimbusTest.parseProviderStatus({ page: {}, status: { indicator: 'invented' } }); return false; } catch { return true; } });
  assert(invalidStatus, 'Unknown upstream states must not become a healthy status.');
  await page.locator('#faq-q-security').focus(); await page.keyboard.press('Enter');
  assert.equal(await page.locator('.faq-question[aria-expanded=true]').count(), 1);
  assert.equal(await page.locator('#faq-q-security').getAttribute('aria-expanded'), 'true');
  await page.keyboard.press('Control+k'); await page.locator('#palette-search').fill('zzzzzzzzzz');
  assert(await page.locator('#palette-empty').isVisible());
  await page.locator('#palette-search').fill('prcng'); await page.keyboard.press('ArrowDown'); await page.keyboard.press('Home'); await page.keyboard.press('Enter');
  assert.equal(await page.locator('#command-palette').evaluate(node => node.open), false);
  assert.equal(await page.evaluate(() => location.hash), '#pricing');
  await page.keyboard.press('Control+k'); await page.locator('#palette-search').fill('theme'); await page.keyboard.press('Enter');
  assert.equal(await page.getAttribute('html', 'data-theme'), 'light');
  await page.keyboard.press('Control+k'); await page.locator('#palette-search').fill('language'); await page.keyboard.press('Enter');
  assert.equal(await page.getAttribute('html', 'lang'), 'ms');
  assert.match(await page.title(), /Papan Pemuka/);
  await page.evaluate(() => NimbusTest.setLanguage('en'));
  await page.locator('[data-feature=security] summary').click(); await page.locator('[data-policy=tls]').uncheck();
  assert.match(await page.locator('#policy-result').textContent(), /2 of 3/);
  await page.locator('[data-feature=backups] summary').click(); await page.locator('[data-action=backup]').click();
  assert.equal(await page.locator('#snapshot-list li').count(), 1);
  await page.locator('[data-feature=support] summary').click(); await page.locator('[data-action=support]').click();
  await page.locator('#support-form button[type=submit]').click(); assert.equal(await page.locator('#support-message').getAttribute('aria-invalid'), 'true');
  await page.locator('#support-message').fill('The sample release needs a region check.'); await page.locator('#support-form button[type=submit]').click();
  assert.match(await page.locator('#support-result').textContent(), /Nothing was sent/); await page.keyboard.press('Escape');
  await page.locator('#signup-form button[type=submit]').click(); assert.equal(await page.locator('#signup-email').getAttribute('aria-invalid'), 'true');
  await page.locator('#signup-email').fill('student@example.com'); await page.locator('#signup-form button[type=submit]').click();
  await page.waitForFunction(() => document.getElementById('signup-message').textContent.includes('Nothing was sent'));
  assert.equal(await page.locator('#signup-email').inputValue(), '');
  assert.equal(await page.locator('#terminal-command').textContent(), 'nimbus deploy my-app');
  assert.equal(await page.locator('#terminal-output .is-pending').count(), 0);
  await closeToasts(page); const jobs = await page.evaluate(() => NimbusTest.Clock.size);
  for (let index = 0; index < 5; index++) { await page.keyboard.press('Control+k'); await page.keyboard.press('Escape'); }
  assert((await page.evaluate(() => NimbusTest.Clock.size)) <= jobs, 'Closing command palette must not leave extra timer jobs.');
  assert.equal(await page.evaluate(() => NimbusTest.missingTranslations.size), 0);
  await context.close();

  /* Masa aktif: tab tersembunyi tidak menggunakan sela atau kemajuan deploy. */
  const live = await open({ motion: 'no-preference' }); const p = live.page;
  await p.locator('#dashboard').scrollIntoViewIfNeeded(); await p.waitForTimeout(1200);
  assert.equal(await p.locator('.demo-bar').count(), 0, 'The removed top bar must not return.');
  assert.equal(await p.locator('.hero-actions .button-primary').getAttribute('href'), '#dashboard');
  await p.locator('#chart-pause').focus(); await p.keyboard.press('Enter');
  assert.equal((await state(p)).dashboardPaused, true);
  const frozenSamples = await p.evaluate(() => NimbusTest.chartSamples());
  const frozenState = JSON.stringify(await state(p));
  await p.waitForTimeout(1150);
  assert.equal(JSON.stringify(await state(p)), frozenState, 'User pause must stop automatic sampling.');
  assert.deepEqual(await p.evaluate(() => NimbusTest.chartSamples()), frozenSamples);
  await p.locator('#traffic-chart').focus(); await p.keyboard.press('ArrowLeft');
  await p.locator('#chart-tooltip:not([hidden])').waitFor();
  await p.evaluate(() => NimbusTest.setLanguage('ms'));
  assert.match(await p.locator('#chart-pause').getAttribute('aria-label'), /Sambung/);
  const expectedCSV = await p.evaluate(() => NimbusTest.createTrafficCSV(NimbusTest.chartSamples()));
  const downloading = p.waitForEvent('download');
  await p.locator('#chart-export').click();
  const download = await downloading;
  const csv = fs.readFileSync(await download.path(), 'utf8');
  assert.match(download.suggestedFilename(), /^nimbuscloud-traffic-\d{4}-\d{2}-\d{2}-\d{6}\.csv$/);
  assert.equal(csv.charCodeAt(0), 0xFEFF);
  assert.equal(csv, expectedCSV, 'CSV must contain the displayed samples, not newly generated values.');
  assert.equal(csv.split('\r\n').filter(Boolean).length, 61);
  assert.match(csv, /Sampel sebelum yang terkini/);
  await p.locator('#chart-pause').click();
  assert.equal((await state(p)).dashboardPaused, false);
  await p.waitForTimeout(1200);
  assert.notDeepEqual(await p.evaluate(() => NimbusTest.chartSamples()), frozenSamples);
  await closeToasts(p);
  await hidden(p, true); const paused = JSON.stringify(await state(p)); await p.waitForTimeout(1100);
  assert.equal(JSON.stringify(await state(p)), paused); await hidden(p, false);
  const count = (await state(p)).servers.length; await p.locator('#deploy-button').click();
  await p.waitForTimeout(500); assert((await state(p)).deployProgress > 0);
  await hidden(p, true); const progress = (await state(p)).deployProgress; await p.waitForTimeout(900);
  assert.equal((await state(p)).deployProgress, progress); await hidden(p, false); await finishDeploy(p);
  assert.equal((await state(p)).servers.length, count + 1);
  await p.locator('.toast-action:not([hidden])').last().click(); assert.equal((await state(p)).servers.length, count);
  await p.locator('#deploy-button').click(); await p.locator('#cancel-deploy').click(); await finishDeploy(p);
  assert.equal((await state(p)).servers.length, count);
  await closeToasts(p); await p.locator('#auto-scaling').uncheck();
  await p.evaluate(() => NimbusTest.CloudModel.setInstances(1)); await range(p, 'traffic-load', 100);
  await p.locator('#auto-scaling').check(); assert.equal((await state(p)).instances, 2);
  await range(p, 'traffic-load', 1000); assert.equal((await state(p)).instances, 2);
  await p.waitForTimeout(1100); assert.equal((await state(p)).instances, 2);
  await hidden(p, true); await p.waitForTimeout(1000); assert.equal((await state(p)).instances, 2); await hidden(p, false);
  await p.evaluate(() => document.getElementById('get-started').scrollIntoView({ behavior: 'instant' }));
  await p.waitForTimeout(1200); assert.equal((await state(p)).instances, 2);
  await p.evaluate(() => document.getElementById('scaling').scrollIntoView({ behavior: 'instant' }));
  await p.waitForFunction(() => NimbusState.get().instances > 2, null, { timeout: 6000 });
  assert((await state(p)).instances <= 20);
  await p.locator('#terminal').scrollIntoViewIfNeeded(); await p.locator('[data-action=terminal-replay]').click();
  await p.waitForTimeout(300); await p.locator('#terminal-pause').click();
  const terminal = await p.locator('#terminal-command').textContent(); await p.waitForTimeout(500);
  assert.equal(await p.locator('#terminal-command').textContent(), terminal);
  await live.context.close();

  /* Susun atur kedua-dua bahasa dan tema mesti muat pada telefon dan desktop. */
  for (const width of [360, 768, 1280, 1440]) {
    const current = await open({ width });
    for (const language of ['en', 'ms']) for (const theme of ['dark', 'light']) {
      await current.page.evaluate(({ language, theme }) => { NimbusTest.setLanguage(language); document.documentElement.dataset.theme = theme; }, { language, theme });
      assert.equal(await current.page.evaluate(() => document.documentElement.scrollWidth), width);
      results.push({ width, language, theme });
    }
    await current.context.close();
  }
  assert.deepEqual(errors, []); assert.deepEqual(unexpected, []);
  console.log(JSON.stringify({ status: 'PASS', responsiveCases: results.length, priceCases: Object.keys(prices).length, consoleErrors: errors, unexpectedRequests: unexpected, fonts: 'Google Fonts stubbed; fallback fonts tested.' }, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; }).finally(async () => { await browser?.close(); });
