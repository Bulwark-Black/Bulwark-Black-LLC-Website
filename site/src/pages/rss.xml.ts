import type { APIContext } from "astro";
import { buildCtiFeed } from "@/lib/rss";

export const GET = (context: APIContext) => buildCtiFeed(context);
