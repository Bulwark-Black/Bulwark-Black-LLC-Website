import type { APIContext } from "astro";
import { buildCtiFeed } from "@/lib/rss";

// Exact legacy WordPress URL: bulwarkblack.com/feed
export const GET = (context: APIContext) =>
  buildCtiFeed(context, "application/rss+xml; charset=utf-8");
