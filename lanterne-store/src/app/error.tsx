"use client";

import Link from "next/link";
import { RotateCcw } from "lucide-react";

import { buttonClasses } from "@/components/ui/button-classes";

// Shown instead of a blank screen if a page throws while rendering.
export default function Error({ retry }: { error: unknown; retry: () => void }) {
  return (
    <section className="grain relative flex min-h-[70vh] items-center overflow-hidden bg-night text-paper">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 animate-flicker rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(224,137,58,0.3), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-xl px-4 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-2">Something went wrong</p>
        <h1 className="mt-4 font-display text-[clamp(2.8rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.04em]">
          A fuse <span className="italic text-ember-2">blew.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-paper/70">This page hit an unexpected problem. Your bag is safe. Try again, or head back to the shop.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <button type="button" onClick={() => retry()} className={buttonClasses({ variant: "ember", size: "lg" })}>
            <RotateCcw size={17} /> Try again
          </button>
          <Link href="/shop/" className={buttonClasses({ variant: "light", size: "lg" })}>
            Go to the shop
          </Link>
        </div>
      </div>
    </section>
  );
}
