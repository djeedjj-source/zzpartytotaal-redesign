import { ArrowUpRight, ChefHat } from "lucide-react";
import SectionLink from "./SectionLink";
import { Reveal, SectionTag } from "./ui";

const IMG =
  "https://images.pexels.com/photos/35847872/pexels-photo-35847872.jpeg?auto=compress&cs=tinysrgb&w=1200";

const MENU = [
  { n: "Ontbijt", d: "Verse broodjes, fruit & slow juices" },
  { n: "Lunch", d: "Belegde buffetten & soepen" },
  { n: "Diner", d: "Walking dinner & warme buffetten" },
  { n: "BBQ", d: "Compleet verzorgd, mét chef" },
  { n: "Amuses & hapjes", d: "Kaas, worst & tafelgarnituur" },
  { n: "Espressobar", d: "Mobiel, met barista" },
];

export default function Catering() {
  return (
    <section id="catering" className="noise relative scroll-mt-16 overflow-hidden bg-coal text-paper">
      <div className="absolute inset-0 bg-[radial-gradient(70%_80%_at_85%_20%,rgba(194,14,29,0.25),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-[1520px] gap-14 px-5 py-24 sm:px-8 sm:py-32 lg:grid-cols-2">
        {/* Left: copy + menu list */}
        <div>
          <Reveal>
            <SectionTag light>Catering van A tot ZZ</SectionTag>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.4rem)] uppercase leading-[0.95]">
              Van ijskoud bier
              <br />
              tot <span className="text-brand-bright">verzorgde BBQ.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-paper/65">
              Ontbijt, lunch en diner — volledig verzorgd, zowel mét als zonder
              horecapersoneel. U bepaalt hoe ver wij gaan: van alleen de
              levering tot een complete chef aan de grill.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white">
                <ChefHat size={20} />
              </span>
              <p className="text-sm leading-relaxed text-paper/75">
                <span className="font-bold text-paper">Liever alles laten regelen?</span>{" "}
                Onze horecamedewerkers nemen de volledige bediening over.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {MENU.map((m, i) => (
              <Reveal key={m.n} delay={0.05 * i} y={20}>
                <SectionLink
                  id="contact"
                  className="group flex items-center justify-between gap-4 py-4 transition-colors"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-xs text-brand-bright">
                      0{i + 1}
                    </span>
                    <span className="font-display text-2xl uppercase text-paper transition-colors group-hover:text-brand-bright sm:text-3xl">
                      {m.n}
                    </span>
                    <span className="hidden text-sm text-paper/45 sm:block">
                      {m.d}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-paper/35 transition-all duration-300 group-hover:rotate-45 group-hover:text-brand-bright"
                  />
                </SectionLink>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Right: image */}
        <Reveal delay={0.12} className="relative">
          <div className="img-zoom sticky top-28 overflow-hidden rounded-[28px]">
            <img
              src={IMG}
              alt="Chef bereidt vlees op de BBQ tijdens een evenement"
              className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-[calc(100svh-9rem)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4">
              <div>
                <p className="font-hand text-3xl text-white/90">vers van de grill</p>
                <p className="mt-1 font-display text-3xl uppercase text-white">
                  BBQ &amp; kitchen events
                </p>
              </div>
              <span className="hidden rounded-full border border-white/25 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm sm:block">
                Met chef
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
