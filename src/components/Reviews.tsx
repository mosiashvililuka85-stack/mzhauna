import { useEffect, useState } from "react";

import { reviews } from "@/data/menu";

export function Reviews() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(id);
  }, []);

  const r = reviews[i];

  return (
    <section id="reviews" className="border-y border-ink/10 bg-paper">
      <div className="mx-auto max-w-4xl px-6 py-20 text-center">
        <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-terracotta">
          მიმოხილვები · Guests
        </p>
        <h2 className="mt-3 text-balance font-display text-4xl font-semibold md:text-5xl">
          4.9 from 293 reviews
        </h2>

        <blockquote key={i} className="reveal mx-auto mt-10 max-w-[52ch]">
          <p className="text-lg text-gold" aria-label={`${r.rating} out of 5 stars`}>
            {"★".repeat(r.rating)}
            <span className="text-ink/15">{"★".repeat(5 - r.rating)}</span>
          </p>
          <p className="mt-5 text-pretty font-display text-2xl leading-snug md:text-[1.75rem]">
            “{r.text}”
          </p>
          <footer className="mt-5 font-mono text-xs tracking-wide text-mud">
            {r.name} · {r.origin}
          </footer>
        </blockquote>

        <div className="mt-9 flex items-center justify-center gap-2">
          {reviews.map((rev, idx) => (
            <button
              key={rev.name}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show review from ${rev.name}`}
              aria-current={idx === i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === i ? "w-7 bg-terracotta" : "w-1.5 bg-ink/20 hover:bg-ink/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
