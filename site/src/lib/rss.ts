import rss from "@astrojs/rss";
import { getCollection, type CollectionEntry } from "astro:content";
import type { APIContext } from "astro";
import { site } from "@/lib/site";

// Shared RSS 2.0 feed of every published CTI article. Used by /rss.xml,
// /feed.xml, and the legacy WordPress /feed path.
export async function buildCtiFeed(context: APIContext, contentType?: string): Promise<Response> {
  const all: CollectionEntry<"cti">[] = await getCollection("cti");
  const posts = all
    .filter((post) => !post.data.draft)
    .sort((a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf());

  const response = await rss({
    title: `${site.name} — Cyber Threat Intelligence`,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      link: `/${post.slug}/`,
      pubDate: post.data.publishedAt,
      description: post.data.summary,
      ...(post.data.category ? { categories: [post.data.category] } : {}),
    })),
  });

  // The legacy /feed path advertises itself as application/rss+xml; the
  // .xml routes keep @astrojs/rss's default application/xml.
  if (!contentType) return response;
  return new Response(await response.text(), {
    status: response.status,
    headers: { "content-type": contentType },
  });
}
