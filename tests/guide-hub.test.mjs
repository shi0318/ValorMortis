import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { test } from 'node:test';

test('Demo hub exposes the historical reference and keeps current retail discovery separate', async () => {
  const html = await readFile(new URL('../dist/demo/index.html', import.meta.url), 'utf8');
  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? '';
  assert.match(main, /<h1[^>]*>Valor Mortis Demo archive<\/h1>/);
  assert.match(main, /historical announcements and app boundaries/);
  assert.ok(main.includes('href="/demo/walkthrough/"'), 'historical reference must remain discoverable');
  assert.ok(main.includes('href="/guides/"'), 'retail visitors need a route to current guides');
  assert.ok(main.includes('href="/download/"'), 'installation must lead to the real official-store guide');
  assert.doesNotMatch(main, /latest-guides|newest guides/);
  for (const path of ['/resurrection-parry-mobility-guide/', '/weapons-eternal-guard-guide/']) {
    assert.ok(!main.includes(`href="${path}"`), 'merged retail pages must not masquerade as current Demo articles');
  }
});
