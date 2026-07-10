/**
 * Map a full-res WordPress upload to its pre-generated small JPEG thumbnail.
 *
 *   /wp-content/uploads/2026/03/foo.png  ->  /wp-content/thumbs/2026/03/foo.jpg
 *
 * Thumbnails live under /wp-content/thumbs (mirroring the uploads path) and are
 * always .jpg. Cards render the thumbnail as the primary <img src> — ~60 KB
 * instead of the 2-6 MB originals — and fall back to the original once via
 * onerror. Paths that aren't uploads (or undefined) pass straight through, so a
 * caller can always use the return value as the src and the original as the
 * onerror fallback.
 */
export function thumbUrl(src?: string): string | undefined {
  if (!src || !src.includes("/wp-content/uploads/")) return src;
  return src
    .replace("/wp-content/uploads/", "/wp-content/thumbs/")
    .replace(/\.[a-z0-9]+$/i, ".jpg");
}
