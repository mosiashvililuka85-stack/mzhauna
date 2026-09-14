import { createFileRoute, Link } from "@tanstack/react-router";

import { foodSections, drinkSections, type MenuSection } from "@/data/menu";

import { Reviews } from "@/components/Reviews";
import menuKhinkali from "@/assets/menu-khinkali.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Reservations | Mzhauna Georgian Restaurant, Tbilisi" },
      {
        name: "description",
        content:
          "Full Mzhauna menu with prices in lari: khinkali, khachapuri, ketsi dishes, beer boards, soups, qvevri wine and cocktails. Reserve a table in Tbilisi Old Town.",
      },
      { property: "og:title", content: "Menu & Reservations | Mzhauna, Tbilisi" },
      {
        property: "og:description",
        content:
          "Khinkali, khachapuri, ketsi dishes, beer boards, qvevri wine and cocktails — with a table request form.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function Section({ section }: { section: MenuSection }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <header className="flex items-end justify-between gap-4 border-b border-ink/15 pb-3">
        <h2 className="font-display text-3xl font-semibold md:text-4xl">
          {section.ka}
          <span className="ml-3 align-middle font-body text-[11px] font-normal uppercase tracking-[0.25em] text-mud">
            {section.en}
          </span>
        </h2>
      </header>
      <ul className="mt-6 space-y-6">
        {section.items.map((item) => (
          <li key={item.en} className="flex items-baseline gap-4">
            <div className="min-w-0">
              <p className="font-display text-xl font-semibold leading-tight">{item.ka}</p>
              <p className="text-sm text-ink">{item.en}</p>
              {item.note && <p className="mt-1 text-sm text-pretty text-mud">{item.note}</p>}
            </div>
            <span
              aria-hidden
              className="mx-1 hidden h-px flex-1 translate-y-[-3px] bg-[repeating-linear-gradient(to_right,var(--ink)_0_2px,transparent_2px_6px)] opacity-30 sm:block"
            />
            <span className="ml-auto shrink-0 font-mono text-sm text-terracotta sm:ml-0">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MenuPage() {
  const all = [...foodSections, ...drinkSections];

  return (
    <main className="min-h-screen bg-cream font-body text-ink antialiased">
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link to="/" className="font-display text-2xl font-semibold tracking-tight">
            მჟაუნა{" "}
            <span className="align-middle font-body text-xs uppercase tracking-[0.25em] text-mud">
              Mzhauna
            </span>
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] tracking-wide text-mud md:flex">
            <Link to="/" className="transition-colors hover:text-terracotta">
              Home
            </Link>
            <a href="#reviews" className="transition-colors hover:text-terracotta">
              Reviews
            </a>
            <a href="#reserve" className="transition-colors hover:text-terracotta">
              Contact
            </a>
          </nav>
          <a
            href="tel:+995596638484"
            className="rounded-full bg-terracotta px-4 py-2 text-[13px] font-medium text-cream ring-1 ring-black/5 transition-colors hover:bg-wine"
          >
            Call to reserve
          </a>
        </div>
      </header>

      {/* HEADER */}
      <section className="mx-auto grid max-w-6xl items-end gap-8 px-6 pt-14 pb-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="reveal font-mono text-[11px] uppercase tracking-[0.3em] text-terracotta">
            მენიუ · Full menu
          </p>
          <h1
            className="reveal mt-4 text-balance font-display font-semibold leading-[0.95] text-[clamp(2.75rem,7vw,5.5rem)]"
            style={{ animationDelay: "80ms" }}
          >
            სრული მენიუ
          </h1>
          <div className="rule my-6 w-24" style={{ animationDelay: "160ms" }} />
          <p
            className="reveal max-w-[42ch] text-pretty text-lg text-mud"
            style={{ animationDelay: "220ms" }}
          >
            Everything from the printed menu, with prices in lari. All prices include VAT ·
            ფასები შეიცავს დღგ-ს.
          </p>
        </div>
        <div className="reveal md:col-span-5" style={{ animationDelay: "260ms" }}>
          <img
            src={menuKhinkali}
            alt="Plate of hand-pleated khinkali dumplings at Mzhauna"
            width={1024}
            height={832}
            className="aspect-[5/4] w-full rounded-2xl bg-paper object-cover ring-1 ring-black/5"
          />
        </div>
      </section>

      {/* JUMP LINKS */}
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex flex-wrap gap-2 border-y border-ink/10 py-4">
          {all.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full border border-ink/15 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-mud transition-colors hover:border-terracotta hover:text-terracotta"
            >
              {s.en}
            </a>
          ))}
        </nav>
      </div>

      {/* FOOD */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-16 md:grid-cols-2 md:gap-x-14">
          {foodSections.map((s) => (
            <Section key={s.id} section={s} />
          ))}
        </div>
      </div>

      {/* DRINKS */}
      <div className="border-t border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-olive">
            სასმელები · Bar
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
            Qvevri wine & the bar
          </h2>
          <div className="mt-12 grid gap-16 md:grid-cols-2 md:gap-x-14">
            {drinkSections.map((s) => (
              <Section key={s.id} section={s} />
            ))}
          </div>
        </div>
      </div>

      <Reviews />

      {/* RESERVE */}
      <section id="reserve" className="scroll-mt-20 bg-olive text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              დაჯავშნა · Reserve
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
              Save your seat at the supra
            </h2>
            <p className="mt-5 max-w-[36ch] text-pretty text-cream/80">
              Send a request and we'll call back to confirm. Courtyard tables go quickly on
              Friday and Saturday evenings.
            </p>
            <dl className="mt-8 space-y-4 text-sm text-cream/80">
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-mono text-xs uppercase tracking-wide text-cream/60">
                  Hours
                </dt>
                <dd>Daily · 12:00 — 23:30</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-20 shrink-0 font-mono text-xs uppercase tracking-wide text-cream/60">
                  Address
                </dt>
                <dd>6 Chubinashvili Street, Tbilisi 1006</dd>
              </div>
            </dl>
          </div>
          <div className="md:col-span-7">
            <ReservationForm />
          </div>
        </div>
      </section>

      <footer className="bg-ink text-cream/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">მჟაუნა</p>
            <p className="mt-1 font-mono text-xs tracking-wide">
              6 Chubinashvili St · Tbilisi · +995 596 63 84 84
            </p>
          </div>
          <Link to="/" className="text-xs text-cream/50 transition-colors hover:text-cream">
            ← Back home
          </Link>
        </div>
      </footer>
    </main>
  );
}
