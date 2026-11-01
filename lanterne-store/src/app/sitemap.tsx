import type { MetadataRoute } from "next";

import { products } from "@/lib/products";
import { roomVibes } from "@/lib/room-vibes";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

// Public pages only: bag, checkout, wishlist and orders are per-visitor.
export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number) => ({ url: `${siteUrl}${path}`, changeFrequency: "weekly" as const, priority });
  return [
    page("/", 1),
    page("/shop/", 0.9),
    page("/rooms/", 0.8),
    ...roomVibes.map((r) => page(`/rooms/${r.id}/`, 0.7)),
    ...products.map((p) => page(`/shop/${p.slug}/`, 0.8)),
    page("/about/", 0.5),
    page("/contact/", 0.5),
  ];
}
