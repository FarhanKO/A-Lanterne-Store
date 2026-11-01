# Lanterne — lighting store

A complete e-commerce front end for a fictional lighting brand. It has a 3D product configurator, a filterable catalogue, product pages, a persistent cart, a three-step checkout and order history. It is built as a portfolio piece to show what a modern, animated storefront looks like end to end.

**Live demo:** https://farhanko.github.io/lanterne-store/

![Lanterne homepage hero with the 3D pendant configurator](docs/hero.jpg)

## What's inside

| Area | Features |
| --- | --- |
| **Intro** | First-visit landing animation: a brass pendant drops in and swings, its bulb flickers on while a counter warms to 2,700 K, the wordmark lights up from the centre, then a curtain lifts and the hero animates in. Plays once per session, skips for reduced motion and deep links, and decides before first paint so there's no flash |
| **Home** | Three.js pendant you can drag, re-finish and switch on/off · new arrivals hung on a "clothes line" that sways with scroll speed · room explorer · day/night "see it lit" slider · pinned horizontal process story · cursor image trail · reviews wall · FAQ |
| **Shop** | Dual-handle price range slider with a live price histogram, editable min/max and presets · filters for category, room, finish, in stock and on sale · search · animated sort menu · live counts per filter · removable filter chips · URL-synced state, so filtered views can be shared · mobile filter sheet |
| **Rooms** | A page per room, each with its own palette, time of day and colour temperature (evening living room, candlelit dining, slow-morning bedroom, focused workspace, night-time hallway, sunrise kitchen). The photo starts at dusk and its lamps flicker on, with a lights switch to replay it · shop-the-look hotspots · a three-layer lighting recipe · room tips · the room's products · a walk to the next room. The Rooms index lights each room up on hover |
| **About** | Brand story, animated stats, values, designers with their pieces, milestones timeline |
| **Contact** | Validated contact form with topic chips and a conditional order-number field · contact cards · studio hours and address · FAQ |
| **Product** | Photo gallery with hover zoom, plus an interactive 3D view for spun shades · finish picker · quantity · stock and low-stock states · delivery estimate · sold-out "notify me" · spec accordion · ratings breakdown and a write-a-review form · related products · sticky mobile add-to-bag · JSON-LD product data for SEO |
| **Cart** | Slide-over bag and full cart page · free-shipping progress · upsells · discount codes (`LANTERNE10`, `GLOW20`, `FREESHIP`) · animated totals |
| **Checkout** | Contact → delivery → payment steps · field validation, including a Luhn check, expiry check and card-brand detection · three shipping methods · simulated payment · order confirmation |
| **Account** | Wishlist and order history, saved to `localStorage` |
| **Everywhere** | ⌘K / `/` product search · toasts · smooth scrolling · reduced-motion support · keyboard and screen-reader friendly controls · custom 404 |

## Stack

- **Next.js 16** (App Router, static export) and **TypeScript**
- **Tailwind CSS v4** for styling with design tokens
- **Motion** for UI animation, **Lenis** for smooth scroll
- **Three.js** via **React Three Fiber** and **drei** for the 3D lamps. Each shade is a 2D profile spun on a `LatheGeometry`, the same way real metal shades are spun.
- **Zustand** for cart, wishlist and order state, persisted to `localStorage`
- **GitHub Actions** deploys the static export to **GitHub Pages**

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
npm run start      # serve ./out
```

## Project structure

```
src/
  app/                 routes: home, shop, shop/[slug], rooms, rooms/[room], cart, checkout, wishlist, account, about, contact
  components/
    home/              homepage sections
    shop/              catalogue filters and grid
    product/           product card and product page
    cart/ checkout/    order summary, checkout flow, confirmation
    site/              header, footer, cart drawer, search, toasts, providers
    three/             React Three Fiber lamp scene and lazy viewer
    unlumen-ui/        components from the Unlumen UI registry
  lib/                 catalogue data, stores, pricing, image loader
```

## Notes

- This is a demo. No orders are fulfilled and no payment is taken. Use the test card `4242 4242 4242 4242`.
- Product photos come from [Unsplash](https://unsplash.com) and load through a custom `next/image` loader that requests right-sized images from Unsplash's CDN.
- To deploy your own copy, push to `main` and set **Settings → Pages → Source** to **GitHub Actions**.

---

Designed and built by [MD Farhan](https://github.com/FarhanKO).
