// Official media catalog for the Valor Mortis Demo guide.
// Source: Steam store page (App 2828710 / Demo 4641840) screenshots + header art.
// Fan-site usage with attribution; not affiliated with One More Level / Lyrical Games.

export interface SiteImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
}

const STEAM_CREDIT = 'Steam store screenshot | Valor Mortis';

export const ASSETS = {
  hero: {
    src: '/images/vm-hero-banner.webp',
    alt: 'A resurrected soldier facing a nightmarish, dark-magic Paris in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  parisNightmare: {
    src: '/images/vm-paris-nightmare.webp',
    alt: 'The blood-slick, rain-soaked streets of a Paris twisted by dark magic in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  rapierCombat: {
    src: '/images/vm-rapier-combat.webp',
    alt: 'First-person Rapier melee combat against a monstrous foe in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  pistolDuel: {
    src: '/images/vm-pistol-duel.webp',
    alt: 'Gunplay with a flintlock pistol woven into melee combat in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  catacombs: {
    src: '/images/vm-catacombs.webp',
    alt: 'The bone-lined catacombs beneath 19th-century Paris in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  monsterEncounter: {
    src: '/images/vm-monster-encounter.webp',
    alt: 'A horrifying creature prowling the nightmarish streets in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  spectralPower: {
    src: '/images/vm-spectral-power.webp',
    alt: 'Channeling a blast of spectral alchemical energy in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  bossFight: {
    src: '/images/vm-boss-fight.webp',
    alt: 'A large boss encounter in the decaying grandeur of Paris in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  decayingBoulevard: {
    src: '/images/vm-decaying-boulevard.webp',
    alt: 'A grand, decaying boulevard of the City of Light turned nightmare in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  resurrection: {
    src: '/images/vm-resurrection.webp',
    alt: 'The resurrection mechanic — rising again from death in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  parry: {
    src: '/images/vm-parry.webp',
    alt: 'Parrying an enemy blow with supernatural timing in Valor Mortis',
    width: 1920,
    height: 1080,
    credit: STEAM_CREDIT,
  },
  header: {
    src: '/images/vm-header.webp',
    alt: 'Valor Mortis Steam header art',
    width: 460,
    height: 215,
    credit: 'Steam header art | Valor Mortis',
  },
} as const satisfies Record<string, SiteImage>;
