// 站点全局常量 —— 单一数据源，避免各页面硬编码不一致
export const SITE = {
  name: 'Valor Mortis Guide',
  shortName: 'VM Guide',
  url: 'https://valor-mortis.wiki',
  // Demo release (Steam Demo App 4641840) + full game release (App 2828710)
  demoReleaseDate: '2026-06-07',
  releaseDate: '2026-10-13',
  tagline: 'Hands-on Demo Guides',
  description:
    'Independent Valor Mortis Demo guide with hands-on walkthrough, boss strategy, weapons, powers, and PC settings for One More Level’s first-person soulslike. Every fact is sourced.',
  locale: 'en',
  // Full game name used in schema / VideoGame entity
  gameName: 'Valor Mortis',
  developer: 'One More Level',
  publisher: 'Lyrical Games / One More Level',
  contactEmail: 'nmlkareem161@gmail.com',
  // Official channels
  steamAppId: '2828710',
  steamUrl: 'https://store.steampowered.com/app/2828710/Valor_Mortis/',
  demoAppId: '4641840',
  demoUrl: 'https://store.steampowered.com/app/4641840/Valor_Mortis_Demo/',
  officialSite: 'https://valormortis.game/',
  // Setting / premise (verified from Steam description)
  protagonist: "a fallen soldier of Napoleon's Grande Armée",
  setting: 'a Paris twisted by dark magic',
  // Studio pedigree (verified on Steam page)
  studioNote: 'from the creators of Ghostrunner',
  platforms: ['Steam (PC)'] as const,
  lastVerified: '2026-07-31',
} as const;

export const NAV = [
  { label: 'Demo Guide', href: '/demo/' },
  { label: 'Walkthrough', href: '/demo/walkthrough/' },
  { label: 'Boss Guide', href: '/demo/boss-guide/' },
  { label: 'Weapons & Powers', href: '/demo/weapons-and-abilities/' },
  { label: 'Settings', href: '/demo/settings-and-known-issues/' },
  { label: 'Download', href: '/download/' },
  { label: 'Release Date', href: '/release-date/' },
] as const;

export function isReleased(now: Date = new Date()): boolean {
  return now >= new Date(SITE.releaseDate + 'T00:00:00Z');
}

export function daysUntilRelease(now: Date = new Date()): number {
  const target = new Date(SITE.releaseDate + 'T00:00:00Z').getTime();
  const diff = target - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
