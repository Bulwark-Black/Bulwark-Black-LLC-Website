import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

// Cyber Threat Intelligence articles. Populated by the WordPress/CTI
// archive migration in a later phase; empty for now.
const cti = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    publishedAt: z.coerce.date(),
    summary: z.string(),
    category: z.string().optional(),
    categories: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
    wpId: z.number().optional(),
    wpSlug: z.string().optional(),
    originalLink: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, cti };
