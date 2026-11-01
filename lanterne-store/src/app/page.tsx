import type { Metadata } from "next";

import { Clothesline } from "@/components/home/clothesline";
import { Hero } from "@/components/home/hero";
import { MarqueeStrip } from "@/components/home/marquee-strip";
import { FeaturedGrid, Lookbook, Process, Reviews, ShopByRoom, StoreFaq } from "@/components/home/sections";
import { SeeItLit } from "@/components/home/see-it-lit";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = { alternates: { canonical: `${siteUrl}/` } };

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Clothesline />
      <FeaturedGrid />
      <ShopByRoom />
      <SeeItLit />
      <Process />
      <Lookbook />
      <Reviews />
      <StoreFaq />
    </>
  );
}
