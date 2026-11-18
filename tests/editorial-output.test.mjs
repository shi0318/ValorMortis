import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';
const dist = new URL('../dist/', import.meta.url);
async function htmlFiles(dir = dist) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const child = new URL(entry.name + (entry.isDirectory() ? '/' : ''), dir);
    if (entry.isDirectory()) files.push(...await htmlFiles(child));
    else if (entry.name.endsWith('.html')) files.push(child);
  }
  return files;
}
test('every page identifies its publisher, exposes trust pages and avoids unsupported testing claims', async () => {
  for (const file of await htmlFiles()) {
    const html = await readFile(file, 'utf8');
    const footer = html.match(/<footer[\s\S]*?<\/footer>/)?.[0] ?? '';
    assert.match(footer, /Unofficial fan guide\. Not affiliated with One More Level or Lyrical Games\./);
    for (const slug of ['about', 'contact', 'privacy', 'terms', 'editorial']) assert.ok(footer.includes(`href="/${slug}/"`), `${file}: ${slug}`);
    assert.doesNotMatch(html, /Last verified|>Official<|>Demo-tested<|Verified hands-on in/);
    assert.doesNotMatch(html, /<script[^>]+src=["'][^"']*(googletagmanager|googlesyndication)/);
  }
});
test('privacy describes hosting analytics separately from paused GA and inactive advertising', async () => {
  const html = await readFile(new URL('privacy/index.html', dist), 'utf8');
  assert.match(html, /Cloudflare Web Analytics/);
  assert.match(html, /does not load Google Analytics/);
  assert.match(html, /does not currently serve advertising/);
  assert.doesNotMatch(html, /Star Wars|Galactic Racer/);
});
test('trust pages are WebPage documents and article authorship is visibly attributed', async () => {
  for (const slug of ['about', 'contact', 'privacy', 'terms', 'editorial']) {
    const html = await readFile(new URL(`${slug}/index.html`, dist), 'utf8');
    assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
    assert.match(html, /"@type":"WebPage"/);
    assert.doesNotMatch(html, /"@type":"Article"/);
  }
  const html = await readFile(new URL('download/index.html', dist), 'utf8');
  assert.match(html, /Valor Mortis Guide editorial team/);
  assert.match(html, /Last updated/);
});
