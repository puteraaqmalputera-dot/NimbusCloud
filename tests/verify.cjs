/* Ujian fungsi halaman sebenar; Playwright digunakan sebagai alat pembangunan. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const {chromium} = require('playwright');
const source = fs.readFileSync(path.join(__dirname, '..', 'index.html'), 'utf8');
const executablePath = process.env.CHROMIUM_PATH || (fs.existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
let browser;

(async () => {
  browser = await chromium.launch({headless: true, executablePath, args: ['--no-sandbox']});
  const failures = [];
  async function open(locale = 'en-MY', viewport = {width: 1280, height: 900}) {
    const context = await browser.newContext({locale, viewport});
    const page = await context.newPage();
    page.on('pageerror', error => failures.push(error.message));
    page.on('console', message => { if (message.type() === 'error') failures.push(message.text()); });
    await page.route('http://nimbus.test/**', route => route.fulfill({status: 200, contentType: 'text/html', body: source}));
    await page.route(/https:\/\/fonts\.(googleapis|gstatic)\.com\//, route => route.fulfill({status: 200, contentType: 'text/css', body: ''}));
    await page.goto('http://nimbus.test/');
    await page.waitForFunction(() => !!window.NimbusApp);
    return {context, page};
  }

  /* Bahasa awal dan pilihan tersimpan diuji pada asal pelayar yang sebenar. */
  for (const [locale, expected] of [['ms-MY', 'ms'], ['id-ID', 'ms'], ['en-US', 'en']]) {
    const {context, page} = await open(locale);
    assert.equal(await page.getAttribute('html', 'lang'), expected, locale);
    await context.close();
  }
  const {context, page} = await open();
  await page.evaluate(() => NimbusApp.setLanguage('ms'));
  await page.reload();
  assert.equal(await page.getAttribute('html', 'lang'), 'ms');
  await page.evaluate(() => NimbusApp.setLanguage('en'));
  await page.reload();
  assert.equal(await page.getAttribute('html', 'lang'), 'en');

  const structure = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('[id]')].map(node => node.id);
    const missing = [];
    for (const node of document.querySelectorAll('[href],[aria-controls],[aria-labelledby],[aria-describedby]')) {
      for (const attribute of ['href', 'aria-controls', 'aria-labelledby', 'aria-describedby']) {
        const value = node.getAttribute(attribute) || '';
        const refs = attribute === 'href' ? (value.startsWith('#') ? [value.slice(1)] : []) : value.split(/\s+/).filter(Boolean);
        missing.push(...refs.filter(id => !document.getElementById(id)));
      }
    }
    return {duplicates: ids.length - new Set(ids).size, missing};
  });
  assert.deepEqual(structure, {duplicates: 0, missing: []});
  assert.equal(await page.locator('.company,#testimoni,[data-count]').count(), 0);
  const measured = await page.evaluate(() => ({
    checks: NimbusApp.status.checks,
    unknown: NimbusApp.status.uptime.filter(day => day.value === null).length,
    history: document.querySelectorAll('.net-history-item').length
  }));
  assert.equal(measured.checks.length, 6);
  assert(measured.checks.every(check => check.passed && Number.isFinite(check.duration) && check.duration >= 0));
  assert.equal(measured.unknown, 89);
  assert.equal(measured.history, 0);

  /* Deploy daripada dashboard mesti dikongsi dengan terminal dan log aktiviti. */
  await page.locator('#hero-deploy').focus(); await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => NimbusState.data.deployments.length), 1);
  assert.equal(await page.locator('.hero-live-feed li').count(), 1);
  assert.equal(await page.locator('.deploy-toast').getAttribute('aria-hidden'), 'false');
  await page.locator('#terminal').scrollIntoViewIfNeeded();
  const input = page.locator('#terminal-input');
  for (const command of ['help', 'status', 'regions', 'logs', 'whoami']) {
    await input.fill(command); await input.press('Enter');
  }
  assert.match(await page.locator('#terminal-output').innerText(), /my-app/);
  await input.fill('sta'); await input.press('Tab');
  assert.equal(await input.inputValue(), 'status ');
  await input.fill('scale 5'); await input.press('Enter');
  assert.equal(await page.evaluate(() => NimbusState.data.instances), 5);
  const cpu = await page.evaluate(() => NimbusState.data.cpu);
  assert(Math.abs(parseFloat(await page.locator('.hero-live-value').first().innerText()) - cpu) < .2);
  await input.press('ArrowUp'); assert.equal(await input.inputValue(), 'scale 5');
  await input.press('ArrowDown'); assert.equal(await input.inputValue(), '');
  for (const command of ['scale 0', 'scale 21', 'scale a', 'theme wrong', 'lang zz', 'deploy bad_name', 'status extra', 'deply']) {
    await input.fill(command); await input.press('Enter');
    assert(await page.locator('#terminal-output p').last().evaluate(node => node.classList.contains('error')), command);
  }
  await input.fill('theme light'); await input.press('Enter');
  assert.equal(await page.getAttribute('html', 'data-theme'), 'light');
  assert.match(await page.locator('#terminal-output p').last().innerText(), /light/);
  await input.fill('deploy tested-app'); await input.press('Enter');
  await input.fill('lang ms'); await input.press('Enter');
  await page.waitForFunction(() => NimbusApp.terminal.getOperation() === null, null, {timeout: 5000});
  assert.equal(await page.evaluate(() => NimbusState.data.deployments.at(-1).name), 'tested-app');
  assert.match(await page.locator('.hero-live-feed').innerText(), /tested-app/);
  await input.press('Control+l');
  assert.equal(await page.locator('#terminal-output p').count(), 0);
  assert((await page.evaluate(() => NimbusApp.terminal.getHistory())).includes('deploy tested-app'));
  await input.fill('help'); await input.press('Enter');
  await input.fill('clear'); await input.press('Enter');
  assert.equal(await page.locator('#terminal-output p').count(), 0);

  /* Formula dan kawalan kalkulator diuji pada kedua-dua sempadan. */
  await page.emulateMedia({reducedMotion: 'reduce'});
  await page.evaluate(() => NimbusApp.setLanguage('en'));
  const prices = await page.evaluate(() => [
    calculateNimbusPrice({projects: 1, storage: 1, traffic: 0, support: 'community'}),
    calculateNimbusPrice({projects: 50, storage: 1000, traffic: 50, support: 'sla'}),
    calculateNimbusPrice({projects: 50, storage: 1000, traffic: 50, support: 'sla'}, 'yearly')
  ]);
  assert.equal(prices[0].total, 0); assert.equal(prices[0].plan, 'Starter');
  assert.equal(prices[1].total, 1392.45); assert.equal(prices[1].contact, true);
  assert.equal(prices[2].total, 1113.96); assert.equal(prices[2].annualTotal, 13367.52);
  await page.locator('#kalkulator').scrollIntoViewIfNeeded();
  await page.evaluate(() => {
    for (const [id, value] of Object.entries({'ps-projects': 50, 'ps-storage': 1000, 'ps-traffic': 50})) {
      const node = document.getElementById(id); node.value = value; node.dispatchEvent(new Event('input'));
    }
    const support = document.querySelector('#ps-support'); support.value = 'sla'; support.dispatchEvent(new Event('change'));
  });
  assert.equal(await page.locator('#ps-estimate-price').innerText(), await page.evaluate(() => NimbusApp.t('ps.calc.contact')));
  await page.locator('[data-billing="yearly"]').click();
  assert.equal(await page.locator('#pro-price').innerText(), '63.20');
  assert.match(await page.locator('#ps-calc-billing').innerText(), /1,113.96/);

  /* Penskalaan manual, overload, cooldown dan panjang carta. */
  await page.evaluate(() => { NimbusApp.scaling.setAuto(false); NimbusApp.scaling.setTraffic(2000); });
  assert.equal(await page.locator('#ps-cpu').innerText(), '100%');
  assert.equal(await page.locator('#ps-overload').isHidden(), false);
  await page.evaluate(() => { NimbusApp.scaling.setTraffic(120); NimbusState.set({instances: 3}); NimbusState.set({instances: 5}); });
  assert.equal(await page.locator('#ps-cpu').innerText(), '24%');
  assert.equal(await page.evaluate(() => NimbusApp.scaling.cooldown), 4);
  await page.evaluate(() => { NimbusApp.scaling.setAuto(true); NimbusApp.scaling.spike(); NimbusApp.scaling.tick(1000); });
  assert.equal(await page.evaluate(() => NimbusState.data.instances), 5);
  await page.evaluate(() => { for (let i = 0; i < 3; i++) NimbusApp.scaling.tick(1000); });
  assert(await page.evaluate(() => NimbusState.data.instances > 5));
  assert.equal(await page.evaluate(() => NimbusApp.scaling.history.length), 60);
  assert.equal(await page.evaluate(() => NimbusApp.hero.getSeries().length), 60);

  /* Peta dan jalur uptime boleh dikendalikan dengan papan kekunci. */
  await page.locator('#global').scrollIntoViewIfNeeded();
  assert.equal(await page.locator('.net-map-point').count(), 8);
  const location = page.locator('.net-map-point[data-location="sf"]');
  await location.focus(); await location.press('Enter');
  assert.equal(await page.evaluate(() => NimbusApp.network.selected), 'sf');
  await page.locator('#net-origin').selectOption('sf');
  assert.equal(await page.locator('#net-city-latency').innerText(), '8 ms');
  assert.match(await page.locator('#net-map-link').getAttribute('href'), /openstreetmap\.org/);
  assert.equal(await page.locator('.net-uptime-bar').count(), 90);
  await page.locator('.net-uptime-bar').last().focus(); await page.keyboard.press('Home');
  assert.equal(await page.locator('.net-uptime-bar').first().evaluate(node => node === document.activeElement), true);
  await page.locator('#net-trigger-incident').scrollIntoViewIfNeeded();
  await page.locator('#net-trigger-incident').focus(); await page.keyboard.press('Enter');
  assert.equal(await page.evaluate(() => NimbusApp.status.phase), 0);
  await page.evaluate(() => { for (let i = 0; i < 18; i++) NimbusApp.status.advance(); });
  assert.equal(await page.evaluate(() => NimbusApp.status.phase), 2);
  assert.equal(await page.locator('.net-history-item').count(), 1);
  await page.locator('#net-trigger-incident').click();
  assert.equal(await page.evaluate(() => NimbusApp.status.phase), -1);

  /* Tugas mesti berhenti di luar skrin dan apabila tab tersembunyi. */
  await page.emulateMedia({reducedMotion: 'no-preference'});
  await page.locator('#scaling').scrollIntoViewIfNeeded(); await page.waitForTimeout(150);
  assert.equal(await page.evaluate(() => NimbusApp.scheduler.inspect().find(task => task.id === 'scaling-live').running), true);
  await page.evaluate(() => scrollTo(0, 0)); await page.waitForTimeout(150);
  const elapsed = await page.evaluate(() => NimbusApp.scaling.elapsed);
  await page.waitForTimeout(1100);
  assert.equal(await page.evaluate(() => NimbusApp.scaling.elapsed), elapsed);
  await page.evaluate(() => { Object.defineProperty(document, 'hidden', {configurable: true, get: () => true}); document.dispatchEvent(new Event('visibilitychange')); });
  assert.equal(await page.evaluate(() => NimbusApp.scheduler.inspect().some(task => task.running)), false);
  await page.evaluate(() => { delete document.hidden; document.dispatchEvent(new Event('visibilitychange')); });
  await page.emulateMedia({reducedMotion: 'reduce'});
  await page.evaluate(() => { NimbusApp.scaling.setAuto(false); NimbusApp.scaling.setTraffic(2000); });
  assert.equal(await page.locator('#ps-cpu').innerText(), '100%');

  /* Bahasa, tema, metadata dan susun atur disemak dalam semua kombinasi. */
  for (const lang of ['ms', 'en']) for (const theme of ['dark', 'light']) for (const width of [360, 768, 1280]) {
    await page.setViewportSize({width, height: 900});
    await page.evaluate(({lang, theme}) => { NimbusApp.setLanguage(lang); NimbusApp.setTheme(theme, false); }, {lang, theme});
    await page.waitForTimeout(30);
    assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${lang}/${theme}/${width}`);
    const invalid = await page.evaluate(() => {
      const dictionary = i18n[NimbusApp.lang], issues = [];
      for (const node of document.querySelectorAll('[data-i18n]')) if (!Object.hasOwn(dictionary, node.dataset.i18n)) issues.push(node.dataset.i18n);
      for (const attribute of ['aria-label', 'aria-roledescription', 'placeholder', 'title', 'content']) {
        for (const node of document.querySelectorAll('[data-i18n-' + attribute + ']')) {
          const key = node.getAttribute('data-i18n-' + attribute); if (!Object.hasOwn(dictionary, key)) issues.push(key);
        }
      }
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      while ((node = walker.nextNode())) if (!node.parentElement.closest('script,style') && /\{\w+\}|^(?:base|term|core|ps|net|heroLive)\.\w+$/.test(node.textContent.trim())) issues.push(node.textContent);
      return issues;
    });
    assert.deepEqual(invalid, [], `${lang}: terjemahan lengkap`);
    assert.equal(await page.getAttribute('html', 'lang'), lang);
    assert.equal(await page.locator('.creator-credit').innerText(), 'Created by Putera MY');
  }
  await page.locator('#terminal').scrollIntoViewIfNeeded();
  assert.notEqual(await page.evaluate(() => document.activeElement.id), 'terminal-input');
  await page.locator('[data-command="scale 5"]').click();
  assert.equal(await page.evaluate(() => NimbusState.data.instances), 5);
  assert.notEqual(await page.evaluate(() => document.activeElement.id), 'terminal-input');
  assert.deepEqual(failures, [], 'Tiada ralat halaman atau konsol');
  await context.close(); await browser.close(); browser = null;
  console.log('LULUS: terminal, harga, keadaan bersama, peta, status, pemasa, bahasa, tema dan 12 kombinasi responsif.');
})().catch(async error => { console.error(error); if (browser) await browser.close(); process.exitCode = 1; });
