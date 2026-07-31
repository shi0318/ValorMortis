// Source references for the Valor Mortis Demo guide.
// Every fact on the site maps to one of these; the SourcePanel renders them.
export type SourceStatus = 'official' | 'platform' | 'official-media' | 'demo';

export interface SourceRef {
  label: string;
  url: string;
  publisher: string;
  status: SourceStatus;
  lastChecked: string;
  note: string;
}

export const LAST_CHECKED = '2026-07-27';

export const SOURCES = {
  steam: {
    label: 'Valor Mortis Steam store page',
    url: 'https://store.steampowered.com/app/2828710/Valor_Mortis/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: LAST_CHECKED,
    note: 'App id 2828710 — developer, publisher, release date, genres, categories, PC requirements, screenshots, and the official store description.',
  },
  steamDemo: {
    label: 'Valor Mortis Demo Steam page',
    url: 'https://store.steampowered.com/app/4641840/Valor_Mortis_Demo/',
    publisher: 'Valve / Steam',
    status: 'platform',
    lastChecked: LAST_CHECKED,
    note: 'App id 4641840 — the free playable Demo (released Jun 7, 2026), Save Anytime and comfort features.',
  },
  steamMedia: {
    label: 'Steam official media gallery',
    url: 'https://store.steampowered.com/app/2828710/Valor_Mortis/',
    publisher: 'Valve / Steam',
    status: 'official-media',
    lastChecked: LAST_CHECKED,
    note: 'Official screenshots, header art, and trailers published on the Steam store page.',
  },
  oneMoreLevel: {
    label: 'One More Level (developer)',
    url: 'https://omlgames.com/',
    publisher: 'One More Level',
    status: 'official',
    lastChecked: LAST_CHECKED,
    note: 'Developer of Valor Mortis and Ghostrunner; co-publisher with Lyrical Games.',
  },
  steamNews: {
    label: 'Official Valor Mortis dev updates (Steam news hub)',
    url: 'https://store.steampowered.com/news/app/2828710',
    publisher: 'One More Level / Lyrical Games',
    status: 'official',
    lastChecked: '2026-07-31',
    note: 'First-party developer updates posted to the Steam news hub for App 2828710, including "Emerging from Winter" (2026-03-27) on The Relentless, Nephtoglobin-era weapon concepts and UE5 tooling, and "3 things we are working on to improve combat" (2025-12-21).',
  },
} satisfies Record<string, SourceRef>;

export type SourceKey = keyof typeof SOURCES;

export const CORE_SOURCES = [SOURCES.steam, SOURCES.steamDemo, SOURCES.steamMedia] as const;
