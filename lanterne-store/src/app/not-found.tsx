import Link from "next/link";

import { buttonClasses } from "@/components/ui/button-classes";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-[80vh] items-center overflow-hidden bg-night text-paper">
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[60vh] w-[60vh] -translate-x-1/2 -translate-y-1/2 animate-flicker rounded-full blur-[100px]"
        style={{ background: "radial-gradient(circle, rgba(224,137,58,0.35), transparent 65%)" }}
      />
      <div className="relative mx-auto max-w-2xl px-4 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ember-2">Error 404</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.9] tracking-[-0.045em]">
          This room is
          <br />
          <span className="italic text-ember-2">unlit.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-sm text-paper/60">The page you&apos;re looking for has moved or never existed.</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/" className={buttonClasses({ variant: "ember", size: "lg" })}>
            Back home
          </Link>
          <Link href="/shop/" className={buttonClasses({ variant: "light", size: "lg" })}>
            Shop lighting
          </Link>
        </div>
      </div>
    </section>
  );
}
