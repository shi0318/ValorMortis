// Content collection — drop a .md file in src/content/guides/ to add a page.
// Frontmatter turns the sourcing system into fill-in-the-blanks: status + source keys + checked date.
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { toDateString } from './utils/dates';

// Confidence enum — must match src/data/confidence.ts
const confidenceStatus = z.enum(['demo-tested', 'official', 'community', 'unconfirmed']);

// Source keys — must match keys in src/data/sources.ts
const sourceKey = z.enum(['steam', 'steamDemo', 'steamMedia', 'oneMoreLevel', 'steamNews']);

// YAML bare dates become Date objects; always normalize to YYYY-MM-DD strings.
const dateString = z.preprocess(
  (value) => toDateString(value as string | Date | null | undefined),
  z.string().min(1),
);

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(),
    heading: z.string().optional(),
    description: z.string().min(50).max(170),
    category: z.enum(['guide', 'walkthrough', 'boss', 'weapons', 'skills', 'settings', 'secrets', 'news']),
    status: confidenceStatus,
    sourceKeys: z.array(sourceKey).default([]),
    // Demo build version this page was tested against (e.g. "Demo v1.03")
    demoVersion: z.string().optional(),
    preRelease: z.boolean().default(true),
    order: z.number().default(100),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
    updatedAt: dateString,
  }),
});

export const collections = { guides };
