// Content confidence system for the Valor Mortis Demo guide.
// Unlike a pre-release wiki, this site is built on a PLAYABLE Demo — so the strongest
// tier is "demo-tested": facts verified hands-on in the Demo build (version noted).
// After the full launch (2026-10-13) we add a separate "full-game" tier on new URLs.

export type ConfidenceStatus = 'demo-tested' | 'official' | 'community' | 'unconfirmed';

export interface StatusMeta {
  label: string;
  icon: string;
  // Tailwind class fragment for the badge colour
  classes: string;
  description: string;
}

export const STATUS_META: Record<ConfidenceStatus, StatusMeta> = {
  'demo-tested': {
    label: 'Demo-tested',
    icon: '⚔',
    classes: 'bg-spectral/15 text-spectral border-spectral/40',
    description: 'Verified hands-on in the Valor Mortis Demo build. Version and test date noted.',
  },
  official: {
    label: 'Official',
    icon: '✦',
    classes: 'bg-brass/15 text-brass border-brass/40',
    description: 'Confirmed by One More Level or Lyrical Games via Steam, patch notes, or official channels.',
  },
  community: {
    label: 'Community',
    icon: '◈',
    classes: 'bg-blood/15 text-blood-bright border-blood/40',
    description: 'Cross-checked from multiple player reports (Steam, Reddit, Discord). Corroborated, not first-party.',
  },
  unconfirmed: {
    label: 'Unconfirmed',
    icon: '?',
    classes: 'bg-white/5 text-fog border-white/15',
    description: 'Circulating without a solid source. Flagged, never used as primary content.',
  },
};

// Every Demo page is grounded in tested/official/community facts, so all are indexable.
export const INDEXABLE_STATUS: ConfidenceStatus[] = ['demo-tested', 'official', 'community'];
