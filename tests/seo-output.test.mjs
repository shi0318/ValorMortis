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
