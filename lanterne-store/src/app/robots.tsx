import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["cart/", "checkout/", "account/", "wishlist/"].map((p) => `${base}/${p}`) },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
