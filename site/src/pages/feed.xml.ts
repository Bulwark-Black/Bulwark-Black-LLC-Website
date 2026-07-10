import type { APIContext } from "astro";
import { buildCtiFeed } from "@/lib/rss";

// Legacy alias for /rss.xml.
export const GET = (context: APIContext) => buildCtiFeed(context);
