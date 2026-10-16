// Official confirmed facts only — pulled from the Steam store pages for
// Valor Mortis (App 2828710) and Valor Mortis Demo (App 4641840), checked 2026-10-15,
// plus the developer/publisher listings. Used on the homepage trust surfaces.
import { SITE } from './site';

export interface OfficialFact {
  label: string;
  value: string;
  sourceLabel: string;
  sourceUrl: string;
}

export const OFFICIAL_FACTS: OfficialFact[] = [
  {
    label: 'Full title',
    value: 'Valor Mortis',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Genre',
    value: 'First-person action soulslike from the creators of Ghostrunner',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Developer / publisher',
    value: 'One More Level / Lyrical Games & One More Level',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Full release',
    value: 'Released October 13, 2026 on Steam',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Demo',
    value: 'Free Valor Mortis Demo — released June 7, 2026, playable now on Steam',
    sourceLabel: 'Steam Demo',
    sourceUrl: SITE.demoUrl,
  },
  {
    label: 'Platform',
    value: 'Windows PC via Steam (DirectX 12, 64-bit)',
    sourceLabel: 'Steam',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Setting',
    value: "19th-century Eastern Europe twisted by dark magic — Napoleon's stalled eastern campaign as a nightmarish labyrinth",
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Protagonist',
    value: "A fallen soldier of Napoleon's Grande Armée, resurrected by a mysterious force",
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Combat',
    value: 'Brutal first-person combat fusing gunplay with visceral melee — Rapier and pistol, parries and dodges',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Signature mechanic',
    value: 'Resurrection as a tool — death becomes a tactical advantage; dark alchemical powers augment combat',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
  {
    label: 'Structure',
    value: 'Interconnected metroidvania — unlock powers to reach new areas and backtrack through its world',
    sourceLabel: 'Steam description',
    sourceUrl: SITE.steamUrl,
  },
];

// Steam genre / tag list (verified from the store page)
export const STEAM_TAGS = [
  'Action',
  'Adventure',
  'RPG',
  'Soulslike',
  'First-Person',
  'Gunplay',
  'Metroidvania',
] as const;

// Minimum PC requirements (verified from the Steam store page)
export const PC_MIN = {
  os: 'Windows 10/11 64-bit',
  cpu: 'Intel Core i5-10600K / AMD Ryzen 5 3600',
  ram: '16 GB RAM',
  gpu: 'NVIDIA GeForce GTX 1660 Ti / AMD Radeon RX 5600 XT',
  directx: 'Version 12',
  storage: '60 GB available space (SSD required)',
} as const;

// Recommended PC requirements (verified from the Steam store page)
export const PC_REC = {
  os: 'Windows 10/11 64-bit',
  cpu: 'Intel Core i5-13400 / AMD Ryzen 7 5800X',
  ram: '16 GB RAM',
  gpu: 'NVIDIA GeForce RTX 3070 / AMD Radeon RX 6800',
  directx: 'Version 12',
  storage: '60 GB available space (SSD required)',
} as const;

// Store features (Steam categories)
export const STEAM_FEATURES = [
  'Single-player',
  'Full controller support',
  'DualSense controller support',
  'Save Anytime (Demo)',
  'Subtitle options',
  'Surround sound',
  'HDR available',
] as const;
