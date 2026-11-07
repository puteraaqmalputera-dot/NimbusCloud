/* Regresi tangkapan skrin; Playwright hanya digunakan semasa pembangunan. */
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const { chromium } = require('playwright');

const site = process.env.NIMBUS_ROOT || path.resolve(__dirname, '..');
const update = process.argv.includes('--update');
const fontCache = process.env.NIMBUS_FONT_CACHE ? path.resolve(process.env.NIMBUS_FONT_CACHE) : null;
const fontMode = fontCache ? 'google-cache' : 'system';
const baselineRoot = path.join(site, 'tests', 'visual-baselines', fontMode);
const artifactRoot = path.join(site, 'tests', 'visual-artifacts', fontMode);
const manifestPath = path.join(baselineRoot, 'manifest.json');
const threshold = 24;
const maximumRatio = 0.002;
const frozenTime = '2026-11-07T12:00:00.000Z';
const providerEndpoints = new Set([
  'https://www.vercel-status.com/api/v2/status.json',
  'https://www.githubstatus.com/api/v2/status.json',
  'https://www.cloudflarestatus.com/api/v2/status.json'
]);
const origin = 'http://nimbus.visual/';
const executablePath = process.env.CHROMIUM_PATH ||
  (fs.existsSync('/usr/bin/chromium') ? '/usr/bin/chromium' : undefined);
const files = Object.fromEntries(['index.html', 'styles.css', 'app.js'].map(name =>
  [name, fs.readFileSync(path.join(site, name), 'utf8')]
));
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const css = fontCache ? fs.readFileSync(path.join(fontCache, 'fonts.css'), 'utf8') : '';
const fontIndex = fontCache ? JSON.parse(fs.readFileSync(path.join(fontCache, 'index.json'), 'utf8')) : {};
const fontFingerprint = hash(css || 'system-fonts-with-google-fonts-css-disabled');

/* Saiz dan bahagian dipilih untuk mengesan perubahan susun atur sebenar. */
const cases = [
  { id: 'mobile-dark-ms-hero', width: 360, height: 800, language: 'ms', theme: 'dark' },
  { id: 'mobile-light-ms-hero', width: 360, height: 800, language: 'ms', theme: 'light' },
  { id: 'mobile-dark-en-dashboard', width: 360, height: 800, language: 'en', theme: 'dark', target: '#dashboard' },
  { id: 'mobile-light-en-pricing', width: 360, height: 800, language: 'en', theme: 'light', target: '#pricing' },
  { id: 'tablet-dark-en-hero', width: 768, height: 900, language: 'en', theme: 'dark' },
  { id: 'tablet-light-ms-scaling', width: 768, height: 900, language: 'ms', theme: 'light', target: '#scaling' },
  { id: 'desktop-dark-en-hero', width: 1280, height: 900, language: 'en', theme: 'dark' },
  { id: 'desktop-light-en-hero', width: 1280, height: 900, language: 'en', theme: 'light' },
  { id: 'mobile-dark-ms-providers', width: 360, height: 800, language: 'ms', theme: 'dark', target: '#service-status' }
];

/* PNG dibaca melalui canvas pelayar; tiada dependency penyahkod imej. */
async function comparePixels(page, baseline, actual) {
  return page.evaluate(async ({ expected, received, threshold }) => {
    async function decode(data) {
      const bytes = Uint8Array.from(atob(data), character => character.charCodeAt(0));
      return createImageBitmap(new Blob([bytes], { type: 'image/png' }));
    }
    const [first, second] = await Promise.all([decode(expected), decode(received)]);
    if (first.width !== second.width || first.height !== second.height) {
      const result = {
        dimensionsMatch: false,
        expected: { width: first.width, height: first.height },
        actual: { width: second.width, height: second.height },
        changedRatio: 1
      };
      first.close(); second.close();
      return result;
    }
    const canvas = document.createElement('canvas');
    canvas.width = first.width; canvas.height = first.height;
    const context = canvas.getContext('2d', { willReadFrequently: true });
    context.drawImage(first, 0, 0);
    const before = context.getImageData(0, 0, canvas.width, canvas.height).data;
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(second, 0, 0);
    const after = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let changedPixels = 0;
    let absoluteError = 0;
    for (let index = 0; index < before.length; index += 4) {
      let maximum = 0;
      for (let channel = 0; channel < 4; channel++) {
        const difference = Math.abs(before[index + channel] - after[index + channel]);
        maximum = Math.max(maximum, difference);
        absoluteError += difference;
      }
      if (maximum > threshold) changedPixels++;
    }
    const totalPixels = canvas.width * canvas.height;
    const result = {
      dimensionsMatch: true, width: canvas.width, height: canvas.height,
      changedPixels, totalPixels, changedRatio: changedPixels / totalPixels,
      meanChannelError: absoluteError / before.length
    };
    first.close(); second.close();
    return result;
  }, {
    expected: baseline.toString('base64'), received: actual.toString('base64'), threshold
  });
}

async function openCase(browser, item) {
  const context = await browser.newContext({
    viewport: { width: item.width, height: item.height },
    deviceScaleFactor: 1, locale: item.language === 'ms' ? 'ms-MY' : 'en-MY',
    reducedMotion: 'reduce', colorScheme: item.theme, serviceWorkers: 'block', timezoneId: 'UTC'
  });
  await context.addInitScript(({ theme, language, frozenTime }) => {
    localStorage.setItem('nimbus-theme', theme);
    localStorage.setItem('nimbus-language', language);
    Math.random = () => 0.5;
    const NativeDate = Date;
    const timestamp = NativeDate.parse(frozenTime);
    window.Date = class extends NativeDate {
      constructor(...values) { super(...(values.length ? values : [timestamp])); }
      static now() { return timestamp; }
    };
  }, { ...item, frozenTime });
  const issues = [];
  await context.route('**/*', route => {
    const url = new URL(route.request().url());
    /* Sumber luar berubah; baseline menggunakan respons kontrak yang tetap. */
    if (providerEndpoints.has(url.href)) {
      return route.fulfill({
        contentType: 'application/json', headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          page: { updated_at: '2026-11-01T00:00:00Z' },
          status: { indicator: url.hostname === 'www.cloudflarestatus.com' ? 'major' : 'none' }
        })
      });
    }
    if (url.hostname === 'fonts.googleapis.com') {
      return route.fulfill({ contentType: 'text/css', body: css });
    }
    if (url.hostname === 'fonts.gstatic.com' && fontCache) {
      const cached = fontIndex[url.href];
      const file = cached && path.join(fontCache, path.basename(cached));
      if (file && fs.existsSync(file)) return route.fulfill({ contentType: 'font/woff2', body: fs.readFileSync(file) });
    }
    if (url.origin === new URL(origin).origin) {
      const name = url.pathname === '/' ? 'index.html' : url.pathname.slice(1);
      if (Object.hasOwn(files, name)) {
        return route.fulfill({
          contentType: name.endsWith('.js') ? 'text/javascript' : name.endsWith('.css') ? 'text/css' : 'text/html',
          body: files[name]
        });
      }
    }
    issues.push(`Unexpected request: ${url.href}`);
    return route.abort();
  });
  const page = await context.newPage();
  page.on('pageerror', error => issues.push(error.message));
  page.on('console', message => { if (['warning', 'error'].includes(message.type())) issues.push(message.text()); });
  await page.goto(origin, { waitUntil: 'networkidle' });
  await page.waitForSelector('html.app-ready');
  await page.evaluate(() => document.fonts.ready);
  if (item.target) await page.locator(item.target).scrollIntoViewIfNeeded();
  else await page.evaluate(() => scrollTo({ top: 0, behavior: 'instant' }));
  await page.mouse.move(1, 1);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  if (item.target === '#dashboard') {
    await page.locator('#traffic-chart').scrollIntoViewIfNeeded();
    await page.waitForFunction(() => document.getElementById('chart-container').dataset.ready === 'true');
  }
  if (item.target === '#service-status') {
    await page.waitForFunction(() => {
      const rows = [...document.querySelectorAll('#service-status [data-provider]')];
      return rows.length === 3 && rows.every(row =>
        ['operational', 'major'].includes(row.dataset.state) && row.querySelector('time').hasAttribute('datetime')
      );
    });
    await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  }
  const overflow = await page.evaluate(() => document.documentElement.scrollWidth > innerWidth);
  if (overflow) issues.push('Horizontal overflow');
  const actual = item.target
    ? await page.locator(item.target).screenshot({
        animations: 'disabled', caret: 'hide', scale: 'css',
        style: '.site-header, .scroll-progress, .skip-link { visibility: hidden !important; }'
      })
    : await page.screenshot({ animations: 'disabled', caret: 'hide', scale: 'css' });
  return { page, context, actual, issues };
}

(async () => {
  let browser;
  fs.mkdirSync(artifactRoot, { recursive: true });
  const report = { mode: update ? 'update' : 'compare', fontMode, results: [] };
  const pendingBaselines = new Map();
  try {
    browser = await chromium.launch({
      executablePath, headless: true,
      args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-color-profile=srgb']
    });
    const environment = {
      schema: 1, chromiumMajor: browser.version().split('.')[0], platform: process.platform,
      fontMode, fontFingerprint, deviceScaleFactor: 1, threshold, maximumRatio,
      timezone: 'UTC', frozenTime, providerFixture: 'status-v2-none-none-major',
      componentOverlayPolicy: 'hide-global-fixed-elements'
    };
    let manifest;
    if (update) {
      fs.mkdirSync(baselineRoot, { recursive: true });
      manifest = { ...environment, cases: {} };
    } else {
      if (!fs.existsSync(manifestPath)) throw new Error('No visual baseline. Review the page, then run node tests/visual.cjs --update.');
      manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      for (const key of Object.keys(environment)) {
        if (manifest[key] !== environment[key]) throw new Error(`Baseline environment differs: ${key}. Use the matching Chromium, OS and font mode; only update after review.`);
      }
    }
    for (const item of cases) {
      const { page, context, actual, issues } = await openCase(browser, item);
      try {
        const baselinePath = path.join(baselineRoot, `${item.id}.png`);
        if (issues.length) throw new Error(issues.join('; '));
        const identity = { width: item.width, height: item.height, language: item.language, theme: item.theme, target: item.target || 'viewport' };
        if (update) {
          pendingBaselines.set(baselinePath, actual);
          manifest.cases[item.id] = { ...identity, sha256: hash(actual) };
          report.results.push({ id: item.id, status: 'UPDATED', bytes: actual.length });
          continue;
        }
        const reference = manifest.cases[item.id];
        if (!reference || !fs.existsSync(baselinePath)) throw new Error(`Missing baseline: ${item.id}`);
        for (const [key, value] of Object.entries(identity)) {
          if (reference[key] !== value) throw new Error(`Baseline definition differs: ${item.id}/${key}`);
        }
        const baseline = fs.readFileSync(baselinePath);
        if (hash(baseline) !== reference.sha256) throw new Error(`Baseline integrity mismatch: ${item.id}`);
        const comparison = await comparePixels(page, baseline, actual);
        const passed = comparison.dimensionsMatch && comparison.changedRatio <= maximumRatio;
        if (!passed) fs.writeFileSync(path.join(artifactRoot, `${item.id}-actual.png`), actual);
        report.results.push({ id: item.id, status: passed ? 'PASS' : 'FAIL', ...comparison });
      } catch (error) {
        fs.writeFileSync(path.join(artifactRoot, `${item.id}-actual.png`), actual);
        report.results.push({ id: item.id, status: 'FAIL', error: error.message });
      } finally { await context.close(); }
    }
    if (update && report.results.every(item => item.status === 'UPDATED')) {
      pendingBaselines.forEach((image, filename) => fs.writeFileSync(filename, image));
      fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
    }
    report.status = report.results.some(item => item.status === 'FAIL') ? 'FAIL' : 'PASS';
    if (report.status === 'FAIL') process.exitCode = 1;
  } catch (error) {
    report.status = 'FAIL'; report.error = error.message; process.exitCode = 1;
  } finally {
    await browser?.close();
    fs.writeFileSync(path.join(artifactRoot, 'report.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
  }
})();
