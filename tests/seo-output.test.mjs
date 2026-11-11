import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

const EXPECTED_SITE = 'https://valor-mortis.wiki';
const LEGACY_SITE = 'https://valormortis.wiki';
const distUrl = new URL('../dist/', import.meta.url);

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

async function readDistFile(path) {
  return readFile(new URL(path, distUrl), 'utf8');
}

function extractLocs(xml) {
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
}

test('robots.txt advertises the sitemap on the canonical hyphenated domain', async () => {
  const robots = await readDistFile('robots.txt');

  assert.match(
    robots,
    new RegExp(`^Sitemap: ${escapeRegExp(EXPECTED_SITE)}/sitemap-index\\.xml$`, 'm'),
  );
  assert.doesNotMatch(robots, new RegExp(escapeRegExp(LEGACY_SITE)));
});

test('sitemap index points to the canonical hyphenated domain', async () => {
  const sitemapIndex = await readDistFile('sitemap-index.xml');
  const locs = extractLocs(sitemapIndex);

  assert.deepEqual(locs, [`${EXPECTED_SITE}/sitemap-0.xml`]);
  assert.doesNotMatch(sitemapIndex, new RegExp(escapeRegExp(LEGACY_SITE)));
});

test('all sitemap URLs use the canonical hyphenated domain', async () => {
  const sitemap = await readDistFile('sitemap-0.xml');
  const locs = extractLocs(sitemap);

  assert.ok(locs.length > 0, 'expected sitemap-0.xml to contain at least one URL');
  assert.ok(
    locs.every((loc) => loc.startsWith(`${EXPECTED_SITE}/`)),
    `expected every sitemap URL to start with ${EXPECTED_SITE}/`,
  );
  assert.doesNotMatch(sitemap, new RegExp(escapeRegExp(LEGACY_SITE)));
});

for (const route of ['release-date', 'download']) {
  test(`${route} serves the released game and matching visible FAQ metadata`, async () => {
    const html = await readDistFile(`${route}/index.html`);
    assert.doesNotMatch(html, /Archived Demo guide\.|You do not have to wait for October|not a shipped fact|Console versions have not been announced|only official way to be notified at launch/);
    assert.match(html, /released on October 13, 2026/);
    assert.match(html, /PlayStation 5/);
    assert.match(html, /Xbox Series X\|S/);
    assert.match(html, /app\/2828710/);
    assert.match(html, new RegExp(`<link rel="canonical" href="${EXPECTED_SITE}/${route}/"`));
    const scripts = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => JSON.parse(m[1]));
    const graph = scripts.flatMap(s => s['@graph'] ?? [s]);
    const article = graph.find(s => s['@type'] === 'Article');
    assert.equal(article?.dateModified, '2026-11-11');
    const faq = graph.find(s => s['@type'] === 'FAQPage');
    assert.ok(faq?.mainEntity?.length >= 3, 'decision pages need genuine FAQ answers');
    for (const item of faq.mainEntity) {
      assert.ok(html.includes(item.name), 'FAQ question must be visible');
      assert.ok(html.includes(item.acceptedAnswer.text), 'FAQ answer must be visible');
    }
    const sitemap = await readDistFile('sitemap-0.xml');
    assert.match(sitemap, new RegExp(`<loc>${EXPECTED_SITE}/${route}/</loc><lastmod>2026-11-11`));
  });
}

test('download separates current SSD requirements from unsupported Demo compatibility assumptions', async () => {
  const html = await readDistFile('download/index.html');
  assert.match(html, /60 GB/);
  assert.match(html, /Ryzen 5 3600/);
  assert.match(html, /Core i5-10600K/);
  assert.match(html, /GTX 1660/);
  assert.match(html, /not assume.*(transfer|compatible)|not confirmed/i);
  assert.doesNotMatch(html, /50 GB|i5-8400|Ryzen 5 2600/);
});

test('homepage and archive clearly distinguish released retail from the historical Demo', async () => {
  const home = await readDistFile('index.html');
  assert.match(home, /Full-game guides/);
  assert.match(home, /Get the full game/);
  assert.match(home, /PlayStation 5/);
  assert.doesNotMatch(home, /the build every page on this|Most pre-launch guides guess/);
  const archive = await readDistFile('demo/walkthrough/index.html');
  assert.match(archive, /Archived Demo guide/);
  assert.match(archive, /The full game released on 2026-10-13/);
});
