import { ArrowUpRight, Check, Send } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EMAIL, LogoBadge, PHONE, PHONE_HREF } from "./ui";
import SectionLink from "./SectionLink";

const IconInstagram = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="18" height="18">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
const IconFacebook = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="18" height="18">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const IconLinkedin = (props: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className} width="18" height="18">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2.5" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const ASSORTIMENT = [
  { label: "Meubilair en Inrichting", slug: "meubilair-en-inrichting" },
  { label: "Aankleding & Decoratie", slug: "aankleding-linnen-en-decoratie" },
  { label: "Buffetten en Barren", slug: "buffetten-en-barren" },
  { label: "Glaswerk, Servies & Bestek", slug: "glaswerk-servies-bestek" },
  { label: "Tenten en Parasols", slug: "tenten-en-parasols" },
  { label: "Drinks & Food", slug: "drinks" },
];

const SERVICE = [
  "Bestellen, bezorgen & betalen",
  "Veelgestelde vragen",
  "Dranken-arrangement",
  "Zelf een evenement organiseren?",
  "Downloads",
  "Referenties",
];

export default function Footer() {
  const [sent, setSent] = useState(false);

  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1520px] px-5 pt-20 sm:px-8">
        {/* Brand row */}
        <div className="flex flex-wrap items-center justify-between gap-8 border-b border-white/10 pb-12">
          <div className="flex items-center gap-5">
            <LogoBadge size="sm" />
            <div>
              <p className="font-display text-2xl uppercase leading-tight">
                ZZ PartyTotaal
              </p>
              <p className="font-hand text-2xl text-brand-bright">
                het totale partyconcept
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: IconInstagram, label: "Instagram" },
              { icon: IconFacebook, label: "Facebook" },
              { icon: IconLinkedin, label: "LinkedIn" },
            ].map((s) => (
              <Link
                key={s.label}
                to="/"
                aria-label={s.label}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 text-paper/70 transition-all hover:border-brand hover:bg-brand hover:text-white"
              >
                <s.icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-12 py-14 lg:grid-cols-12">
          {/* Contact */}
          <div className="lg:col-span-4">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-paper/50">
              Adresgegevens
            </h3>
            <address className="mt-5 space-y-1.5 not-italic">
              <p className="font-display text-xl uppercase">ZZ PartyTotaal</p>
              <p className="text-paper/70">Industrieweg 22</p>
              <p className="text-paper/70">4051 BW Ochten</p>
            </address>
            <div className="mt-6 space-y-3">
              <a
                href={PHONE_HREF}
                className="group flex items-center gap-3 font-display text-2xl uppercase text-paper transition-colors hover:text-brand-bright"
              >
                {PHONE}
                <ArrowUpRight size={18} className="text-brand-bright opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="block text-[15px] font-semibold text-paper/70 transition-colors hover:text-brand-bright"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-paper/50">
              Assortiment
            </h3>
            <ul className="mt-5 space-y-2.5">
              {ASSORTIMENT.map((l) => (
                <li key={l.slug}>
                  <Link
                    to={`/assortiment/${l.slug}`}
                    className="text-sm text-paper/65 transition-colors hover:text-brand-bright"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-paper/50">
              Klantenservice
            </h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICE.map((l) => (
                <li key={l}>
                  <SectionLink
                    id="contact"
                    className="text-sm text-paper/65 transition-colors hover:text-brand-bright"
                  >
                    {l}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-bold uppercase tracking-[0.28em] text-paper/50">
              Nieuwsbrief
            </h3>
            <p className="mt-5 text-sm leading-relaxed text-paper/60">
              Schrijf u in voor feestelijke tips, seizoensacties en nieuwe
              artikelen.
            </p>
            {sent ? (
              <p className="mt-5 flex items-center gap-2 rounded-xl border border-brand/40 bg-brand/10 px-4 py-3.5 text-sm font-semibold text-white">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-brand">
                  <Check size={13} strokeWidth={3.5} />
                </span>
                Bedankt! U ontvangt een bevestiging per mail.
              </p>
            ) : (
              <form
                className="mt-5 space-y-2.5"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <input
                  required
                  type="text"
                  placeholder="Naam"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-brand focus:outline-none"
                />
                <input
                  required
                  type="email"
                  placeholder="E-mailadres"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-brand focus:outline-none"
                />
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-bright"
                >
                  Verzenden
                  <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Giant outline */}
        <div
          aria-hidden
          className="select-none overflow-hidden text-center font-display uppercase leading-[0.8] text-outline opacity-25"
        >
          <span className="block translate-y-[12%] text-[clamp(3.4rem,12.4vw,12rem)]">
            Partytotaal
          </span>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-white/10 py-6 text-[12px] font-semibold text-paper/40">
          <p>© 2026 ZZ PartyTotaal — www.zzpartytotaal.nl</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link to="/" className="transition-colors hover:text-paper">Privacyverklaring</Link>
            <Link to="/" className="transition-colors hover:text-paper">Algemene Voorwaarden</Link>
            <span>KVK 50600052</span>
            <span>BTW NL168058212B03</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
