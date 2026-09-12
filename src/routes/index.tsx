import { createFileRoute, Link } from "@tanstack/react-router";

import { Reviews } from "@/components/Reviews";
import { ReservationForm } from "@/components/ReservationForm";

import heroAsset from "@/assets/interior-long-table-sunflowers.jpg.asset.json";
import aboutAsset from "@/assets/interior-bar-guitar.jpg.asset.json";
import menuKhinkali from "@/assets/menu-khinkali.jpg";
import menuKhachapuri from "@/assets/menu-khachapuri.jpg";
import menuSalad from "@/assets/menu-salad.jpg";
import galleryLongTableAsset from "@/assets/interior-long-table-blue-chairs.jpg.asset.json";
import galleryMountainMuralAsset from "@/assets/interior-mountain-mural.jpg.asset.json";
import galleryWideRoomAsset from "@/assets/interior-dining-room-wide.jpg.asset.json";
import galleryStaircaseAsset from "@/assets/interior-dining-room-staircase.jpg.asset.json";
import galleryWindowDetailAsset from "@/assets/interior-table-window-dolls.jpg.asset.json";
import mapImg from "@/assets/map.jpg";

const heroImg = heroAsset.url;
const aboutImg = aboutAsset.url;
const galleryLongTable = galleryLongTableAsset.url;
const galleryMountainMural = galleryMountainMuralAsset.url;
const galleryWideRoom = galleryWideRoomAsset.url;
const galleryStaircase = galleryStaircaseAsset.url;
const galleryWindowDetail = galleryWindowDetailAsset.url;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Mzhauna | Georgian Restaurant in Tbilisi Old Town",
      },
      {
        name: "description",
        content:
          "Mzhauna — a Georgian supra restaurant in Tbilisi. Wood-fired khachapuri, hand-pleated khinkali, courtyard dining, and qvevri wine. 6 Chubinashvili Street.",
      },
      {
        property: "og:title",
        content: "Mzhauna | Georgian Restaurant in Tbilisi Old Town",
      },
      {
        property: "og:description",
        content:
          "Wood-fired khachapuri, hand-pleated khinkali, and long supra tables in Tbilisi's Old Town.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-cream font-body text-ink antialiased">
      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-display text-2xl font-semibold tracking-tight">
            მჟაუნა{" "}
            <span className="align-middle font-body text-xs tracking-[0.25em] uppercase text-mud">
              Mzhauna
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-[13px] tracking-wide text-mud md:flex">
            <a href="#about" className="transition-colors hover:text-terracotta">
              About
            </a>
            <Link to="/menu" className="transition-colors hover:text-terracotta">
              Menu
            </Link>
            <a href="#gallery" className="transition-colors hover:text-terracotta">
              Gallery
            </a>
            <a href="#reviews" className="transition-colors hover:text-terracotta">
              Reviews
            </a>
            <a href="#visit" className="font-medium text-ink transition-colors hover:text-terracotta">
              Visit
            </a>
          </nav>
          <a
            href="#reserve"
            className="rounded-full bg-terracotta px-4 py-2 text-[13px] font-medium text-cream ring-1 ring-black/5 transition-colors hover:bg-wine"
          >
            Book a table
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-6 pt-16 pb-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="reveal font-mono text-[11px] tracking-[0.3em] uppercase text-terracotta">
              ქართული სუფრა · Georgian supra
            </p>
            <h1
              className="reveal mt-4 text-balance font-display font-semibold leading-[0.92] text-[clamp(3.5rem,11vw,8.5rem)]"
              style={{ animationDelay: "80ms" }}
            >
              მჟაუნა
            </h1>
            <div className="rule my-6 w-24" style={{ animationDelay: "160ms" }} />
            <p
              className="reveal max-w-[34ch] text-pretty text-lg text-mud"
              style={{ animationDelay: "220ms" }}
            >
              A long table, shared plates, and toasts that outlast the meal. Wood-fired
              khachapuri and hand-pleated khinkali in the heart of Tbilisi.
            </p>
            <div
              className="reveal mt-7 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "300ms" }}
            >
              <a
                href="#menu"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-wine"
              >
                See the menu
              </a>
              <a
                href="#visit"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="reveal md:col-span-5" style={{ animationDelay: "260ms" }}>
            <img
              src={heroImg}
              alt="Overhead view of a Georgian supra table with khinkali, khachapuri, candles and clay plates"
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* stats strip */}
        <div className="mx-auto mt-4 max-w-6xl px-6">
          <div
            className="reveal flex flex-wrap items-stretch gap-6 border-y border-ink/10 py-4"
            style={{ animationDelay: "380ms" }}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg text-gold">★★★★★</span>
              <span className="font-mono text-xs text-mud">4.9 · 293 reviews</span>
            </div>
            <div className="w-px bg-ink/10" />
            <div className="font-mono text-xs text-mud">20–60 ₾ / person</div>
            <div className="w-px bg-ink/10" />
            <div className="font-mono text-xs text-mud">Open now · until 11:30 PM</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-12"
      >
        <div className="md:col-span-5">
          <img
            src={aboutImg}
            alt="Warm Georgian old-town courtyard with terracotta walls, hanging lanterns, and a wooden dinner table"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
          />
        </div>
        <div className="md:col-span-7">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-olive">
            შესახებ · About
          </p>
          <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
            The supra, made slow.
          </h2>
          <p className="mt-5 max-w-[46ch] text-pretty text-mud">
            Set in a courtyard off Chubinashvili street, Mzhauna cooks the way a Georgian
            family gathers — bread from the tandoor, cheese from the highlands, wine from
            the qvevri. Nothing rushed, everyone at one table.
          </p>
          <p className="mt-4 max-w-[46ch] text-pretty text-mud">
            Come for a khinkali, stay for the toast. We keep the doors open late so the
            conversation does too.
          </p>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="border-y border-ink/10 bg-paper">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-terracotta">
                მენიუ · Highlights
              </p>
              <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
                From our table
              </h2>
            </div>
            <Link
              to="/menu"
              className="hidden border-b border-ink/30 pb-1 text-sm font-medium text-ink transition-colors hover:border-terracotta sm:inline"
            >
              Full menu
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="overflow-hidden rounded-2xl bg-cream ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
              <img
                src={menuKhinkali}
                alt="Steaming basket of plump khinkali dumplings on a clay plate"
                width={1024}
                height={832}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover bg-paper"
              />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">Khinkali</h3>
                  <span className="font-mono text-sm text-terracotta">18 ₾</span>
                </div>
                <p className="mt-1 text-sm text-pretty text-mud">
                  Hand-pleated beef &amp; pork, black pepper, a bracing broth. Eat by hand,
                  break the seal.
                </p>
                <svg viewBox="0 0 100 14" className="mt-4 h-3 w-16">
                  <path
                    className="ink-line"
                    style={{
                      strokeDasharray: 160,
                      strokeDashoffset: 160,
                      animation: "draw 1s cubic-bezier(0.32, 0.72, 0, 1) 0.3s both",
                    }}
                    d="M2 8 C 20 2, 30 12, 50 7 S 80 3, 98 9"
                  />
                </svg>
              </div>
            </article>

            {/* Card 2 */}
            <article className="overflow-hidden rounded-2xl bg-cream ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
              <img
                src={menuKhachapuri}
                alt="Georgian adjaruli khachapuri bread boat with melted cheese and butter"
                width={1024}
                height={832}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover bg-paper"
              />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">Imperial Khachapuri</h3>
                  <span className="font-mono text-sm text-terracotta">32 ₾</span>
                </div>
                <p className="mt-1 text-sm text-pretty text-mud">
                  The "royal" boat — sulguni and imeuli cheese, a churned egg, butter. Tear,
                  stir, share.
                </p>
                <svg viewBox="0 0 100 14" className="mt-4 h-3 w-16">
                  <path
                    className="ink-line"
                    style={{
                      strokeDasharray: 160,
                      strokeDashoffset: 160,
                      animation: "draw 1s cubic-bezier(0.32, 0.72, 0, 1) 0.45s both",
                    }}
                    d="M2 7 C 22 13, 34 2, 52 8 S 82 12, 98 6"
                  />
                </svg>
              </div>
            </article>

            {/* Card 3 */}
            <article className="overflow-hidden rounded-2xl bg-cream ring-1 ring-black/5 transition-transform duration-300 hover:-translate-y-1">
              <img
                src={menuSalad}
                alt="Fresh Georgian tomato cucumber salad with herbs in a wooden bowl"
                width={1024}
                height={832}
                loading="lazy"
                className="aspect-[5/4] w-full object-cover bg-paper"
              />
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-2xl font-semibold">Mzhauna Salad</h3>
                  <span className="font-mono text-sm text-terracotta">24 ₾</span>
                </div>
                <p className="mt-1 text-sm text-pretty text-mud">
                  Heirloom tomato, cucumber, garden herbs and a whisper of pomegranate — our
                  namesake, bright and chilled.
                </p>
                <svg viewBox="0 0 100 14" className="mt-4 h-3 w-16">
                  <path
                    className="ink-line"
                    style={{
                      strokeDasharray: 160,
                      strokeDashoffset: 160,
                      animation: "draw 1s cubic-bezier(0.32, 0.72, 0, 1) 0.6s both",
                    }}
                    d="M2 9 C 18 3, 32 13, 50 6 S 80 2, 98 8"
                  />
                </svg>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-olive">
          არქივი · The room
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
          The stone room
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          <img
            src={galleryLongTable}
            alt="Long wooden supra table with blue cushioned chairs, sunflowers and crystal glasses"
            width={1024}
            height={1280}
            loading="lazy"
            className="col-span-2 row-span-2 aspect-[4/5] w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
          />
          <img
            src={galleryMountainMural}
            alt="Dining alcove with a hand-painted mountain mural and rocky stone walls"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
          />
          <img
            src={galleryWideRoom}
            alt="Wide view of the dining room with exposed brick, barrel-vaulted ceiling and bar"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
          />
          <img
            src={galleryStaircase}
            alt="Dining room with staircase, mountain murals and candlelit tables"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
          />
          <img
            src={galleryWindowDetail}
            alt="Table set against an arched window with traditional Georgian dolls and candlesticks"
            width={1024}
            height={1024}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover bg-paper ring-1 ring-black/5"
          />
        </div>
      </section>

      <Reviews />

      {/* RESERVE */}
      <section id="reserve" className="scroll-mt-20 bg-ink text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-gold">
              დაჯავშნა · Reserve
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
              Book the long table
            </h2>
            <p className="mt-5 max-w-[36ch] text-pretty text-cream/70">
              Send a request and we'll call back to confirm. Courtyard tables go quickly on
              Friday and Saturday evenings.
            </p>
            <Link
              to="/menu"
              className="mt-7 inline-block border-b border-cream/40 pb-1 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
            >
              See the full menu →
            </Link>
          </div>
          <div className="md:col-span-7">
            <ReservationForm />
          </div>
        </div>
      </section>

      {/* VISIT / CONTACT */}
      <section id="visit" className="bg-olive text-cream">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-gold">
              მიმართულებები · Visit
            </p>
            <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
              Come find the table
            </h2>
            <dl className="mt-8 space-y-5 text-sm">
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-wide text-cream/60">
                  Address
                </dt>
                <dd className="text-pretty">
                  6 Chubinashvili Street, Tbilisi 1006 · PR63+69
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-wide text-cream/60">
                  Hours
                </dt>
                <dd className="text-pretty">Daily · 12:00 — 23:30</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-wide text-cream/60">
                  Phone
                </dt>
                <dd>
                  <a
                    href="tel:+995596638484"
                    className="transition-colors hover:text-gold"
                  >
                    +995 596 63 84 84
                  </a>
                </dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-wide text-cream/60">
                  Price
                </dt>
                <dd className="text-pretty">20–60 ₾ per person</dd>
              </div>
            </dl>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="tel:+995596638484"
                className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold"
              >
                Call to reserve
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=6+Giorgi+Chubinashvili+Street,+Tbilisi+1006,+Georgia"
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-cream"
              >
                Open in maps
              </a>
            </div>
          </div>
          <div>
            <img
              src={mapImg}
              alt="Illustrated map of Tbilisi Old Town showing Mzhauna's location"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-square w-full rounded-2xl object-cover bg-paper/95 ring-1 ring-black/5"
            />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/70">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-10 md:flex-row md:items-center">
          <div>
            <p className="font-display text-2xl font-semibold text-cream">მჟაუნა</p>
            <p className="mt-1 font-mono text-xs tracking-wide">
              6 Chubinashvili St · Tbilisi · +995 596 63 84 84
            </p>
          </div>
          <p className="text-xs text-cream/50">
            დარგავთ თქვენ — we keep the table warm. © 2026 Mzhauna
          </p>
        </div>
      </footer>
    </main>
  );
}
