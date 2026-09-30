import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { EMAIL, PHONE, PHONE_HREF, Reveal, SparkStar } from "./ui";

export default function BigCTA() {
  return (
    <section id="contact" className="noise relative scroll-mt-16 overflow-hidden bg-brand text-white">
      <div className="absolute inset-0 bg-[radial-gradient(90%_80%_at_50%_110%,rgba(0,0,0,0.35),transparent_65%)]" />

      {/* Outline ghost text */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-6 select-none whitespace-nowrap font-display text-[clamp(6rem,18vw,16rem)] uppercase leading-none text-outline opacity-20"
      >
        Feesten? Feesten? Feesten?
      </div>

      <div className="relative mx-auto flex max-w-[1520px] flex-col items-center px-5 py-28 text-center sm:px-8 sm:py-40">
        <Reveal>
          <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] text-white/75">
            <SparkStar className="h-4 w-4 animate-spin-slow" />
            Vrijblijvend &amp; snel geregeld
            <SparkStar className="h-4 w-4 animate-spin-slow" />
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mt-6 font-display text-[clamp(3.2rem,11vw,10rem)] uppercase leading-[0.92]">
            Klaar om
            <br />
            te feesten?
          </h2>
        </Reveal>

        <Reveal delay={0.18}>
          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-white/85">
            Bel, mail of vraag direct een offerte aan. Wij reageren snel en
            denken gratis en voor niets met u mee.
          </p>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href={PHONE_HREF}
              className="group flex items-center gap-3 rounded-full bg-white px-8 py-4.5 text-base font-bold text-brand shadow-[0_16px_44px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
            >
              <Phone size={19} />
              {PHONE}
            </a>
            <a
              href={`mailto:${EMAIL}?subject=Offerte%20aanvraag%20ZZ%20PartyTotaal`}
              className="group flex items-center gap-3 rounded-full border-2 border-white/60 px-8 py-4.5 text-base font-bold text-white transition-colors duration-300 hover:border-white hover:bg-white/10"
            >
              <Mail size={19} />
              {EMAIL}
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <p className="mt-10 font-hand text-3xl text-white/90">
            Van A tot ZZ geregeld — beloofd.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
