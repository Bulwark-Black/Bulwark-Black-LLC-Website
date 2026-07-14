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
    // Auto-extracted indicators (Path B). Stored as a JSON string in frontmatter
    // (the shim writes JSON.stringify); parsed here. `indicators` is the defanged
    // display map; the live download files live at /wp-content/iocs/<slug>/.
    iocs: z
      .preprocess(
        (v) => (typeof v === "string" ? JSON.parse(v) : v),
        z.object({
          count: z.number(),
          files: z.array(z.string()),
          indicators: z.record(z.array(z.string())),
        }),
      )
      .optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, cti };
