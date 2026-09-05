import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a phone number we can call")
    .max(30)
    .regex(/^[+0-9()\s-]+$/, "Digits, spaces and + only"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Pick a time"),
  guests: z.coerce.number().int().min(1, "At least 1 guest").max(30, "Call us for groups over 30"),
  notes: z.string().trim().max(400, "Please keep it under 400 characters").optional(),
});

const empty = { name: "", phone: "", date: "", time: "19:30", guests: "2", notes: "" };

export function ReservationForm() {
  const [values, setValues] = useState<Record<string, string>>(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);

  function set(key: string, value: string) {
    setValues((p) => ({ ...p, [key]: value }));
    setErrors((p) => ({ ...p, [key]: "" }));
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields");
      return;
    }
    setDone(true);
    toast.success(
      `Thanks ${parsed.data.name} — we'll confirm your table for ${parsed.data.guests} by phone.`,
    );
    setValues(empty);
  }

  const field =
    "mt-2 w-full rounded-xl border border-cream/25 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-gold";
  const label = "font-mono text-[11px] uppercase tracking-[0.18em] text-cream/60";

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="r-name">
            სახელი · Name
          </label>
          <input
            id="r-name"
            className={field}
            value={values.name}
            maxLength={80}
            placeholder="Nino Beridze"
            onChange={(e) => set("name", e.target.value)}
          />
          {errors.name && <p className="mt-1.5 text-xs text-gold">{errors.name}</p>}
        </div>
        <div>
          <label className={label} htmlFor="r-phone">
            ტელეფონი · Phone
          </label>
          <input
            id="r-phone"
            className={field}
            value={values.phone}
            maxLength={30}
            inputMode="tel"
            placeholder="+995 5xx xx xx xx"
            onChange={(e) => set("phone", e.target.value)}
          />
          {errors.phone && <p className="mt-1.5 text-xs text-gold">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={label} htmlFor="r-date">
            თარიღი · Date
          </label>
          <input
            id="r-date"
            type="date"
            className={field}
            value={values.date}
            onChange={(e) => set("date", e.target.value)}
          />
          {errors.date && <p className="mt-1.5 text-xs text-gold">{errors.date}</p>}
        </div>
        <div>
          <label className={label} htmlFor="r-time">
            დრო · Time
          </label>
          <input
            id="r-time"
            type="time"
            className={field}
            value={values.time}
            onChange={(e) => set("time", e.target.value)}
          />
          {errors.time && <p className="mt-1.5 text-xs text-gold">{errors.time}</p>}
        </div>
        <div>
          <label className={label} htmlFor="r-guests">
            სტუმრები · Guests
          </label>
          <input
            id="r-guests"
            type="number"
            min={1}
            max={30}
            className={field}
            value={values.guests}
            onChange={(e) => set("guests", e.target.value)}
          />
          {errors.guests && <p className="mt-1.5 text-xs text-gold">{errors.guests}</p>}
        </div>
      </div>

      <div>
        <label className={label} htmlFor="r-notes">
          შენიშვნა · Notes
        </label>
        <textarea
          id="r-notes"
          rows={3}
          maxLength={400}
          className={field}
          placeholder="Birthday supra, courtyard table if possible…"
          value={values.notes}
          onChange={(e) => set("notes", e.target.value)}
        />
        {errors.notes && <p className="mt-1.5 text-xs text-gold">{errors.notes}</p>}
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          className="rounded-full bg-cream px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-gold"
        >
          Request a table
        </button>
        <a
          href="tel:+995596638484"
          className="rounded-full border border-cream/30 px-6 py-3 text-sm font-medium text-cream transition-colors hover:border-cream"
        >
          Or call +995 596 63 84 84
        </a>
      </div>
      {done && (
        <p className="text-xs text-cream/60">
          Requests are answered by phone during opening hours, 12:00 — 23:30.
        </p>
      )}
    </form>
  );
}
