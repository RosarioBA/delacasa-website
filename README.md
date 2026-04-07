# De La Casa — Pastabar & Café Oslo

Website for [De La Casa](https://www.delacasapastabar.com), an Italian pasta bar and café located in Frognerveien, Oslo.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **CMS:** Sanity v4
- **Icons:** React Icons
- **Fonts:** Geist (sans/mono), Playfair Display (menu page)

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

The Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio).

## Project Structure

```
app/
  page.tsx              # Homepage
  menu/page.tsx         # Menu page
  about/page.tsx        # About page
  contact/page.tsx      # Contact page
  reservation/page.tsx  # Reservation page
  bonita/page.tsx       # Bonita Café page
  studio/               # Sanity Studio (embedded)
  layout.tsx            # Root layout (Navbar + Footer)
  globals.css           # Global styles + brand color tokens

components/
  Navbar.tsx            # Fixed navbar, transparent → black on scroll, animated hamburger
  Footer.tsx            # Three-column footer
  Hero.tsx              # Homepage hero with full-screen background
  Welcome.tsx           # Welcome section
  LatestNews.tsx        # News & dishes cards
  BonitaPromo.tsx       # Bonita Café promo split section
  Button.tsx            # Reusable button (primary/secondary variants)
  FadeIn.tsx            # Scroll-triggered fade in animation wrapper

sanity/
  schemaTypes/          # Sanity content schemas
  lib/                  # Sanity client, image helpers

public/
  logo.jpg              # De La Casa logo
  lights.jpg            # Hero background image
```

## Brand Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-black` | `#010101` | Backgrounds (dark sections) |
| `--color-brown-dark` | `#6C270E` | Headings, accents (light backgrounds) |
| `--color-brown-mid` | `#8A4F2A` | — |
| `--color-brown-light` | `#A06811` | Headings, accents (dark backgrounds) |
| `--color-cream` | `#FFEACD` | Section backgrounds |
| `--color-white` | `#ffffff` | Text, buttons |

## Pages Status

| Page | Status |
|------|--------|
| Homepage | Done |
| Menu | Done |
| About | To do |
| Contact | To do |
| Reservation | To do |
| Bonita Café | To do |
