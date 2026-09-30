import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal, SectionTag } from "./ui";

const SERVICES = [
  {
    id: "01",
    title: "Party Verhuur",
    desc: "Tafels, stoelen, tenten, barren en meer — schoon, compleet en op tijd geleverd.",
    img: "https://images.pexels.com/photos/16985119/pexels-photo-16985119.jpeg?auto=compress&cs=tinysrgb&w=1400",
    span: "lg:col-span-7",
    tags: ["Meubilair", "Tenten", "Aankleding"],
    link: "/assortiment/meubilair-en-inrichting",
  },
  {
    id: "02",
    title: "Dranken",
    desc: "Van ijskoud fust bier tot compleet wijnarrangement — met of zonder tap.",
    img: "https://images.pexels.com/photos/5858064/pexels-photo-5858064.jpeg?auto=compress&cs=tinysrgb&w=1000",
    span: "lg:col-span-5",
    tags: ["Bier", "Wijn", "Fris", "Gedistileerd"],
    link: "/assortiment/drinks",
  },
  {
    id: "03",
    title: "Events",
    desc: "Festivals, bedrijfsfeesten en jubilea. Groot denken? Wij denken mee.",
    img: "https://images.pexels.com/photos/3249760/pexels-photo-3249760.jpeg?auto=compress&cs=tinysrgb&w=1000",
    span: "lg:col-span-5",
    tags: ["Festivals", "Zakelijk", "Jubilea"],
    link: "/assortiment/evenement-en-benodigdheden",
  },
  {
    id: "04",
    title: "Organisatie",
    desc: "Van bruiloft tot buurtfeest — planmatig, vakkundig en tot in de puntjes.",
    img: "https://images.pexels.com/photos/32179374/pexels-photo-32179374.jpeg?auto=compress&cs=tinysrgb&w=1400",
    span: "lg:col-span-7",
    tags: ["Bruiloften", "Planning", "Styling"],
    link: "/assortiment",
  },
];

export default function Services() {
  return (
    <section id="diensten" className="noise relative scroll-mt-16 bg-ink text-paper">
      <div className="mx-auto max-w-[1520px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionTag light>Wat wij doen</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.8rem)] uppercase leading-[0.95]">
                Alles onder
                <br />
                <span className="text-brand-bright">één dak.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-paper/60">
              Verhuur, dranken, organisatie en events — één aanspreekpunt, één
              afspraak, nul zorgen. Zo hoort het.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={0.08 * (i % 2)} className={s.span}>
              <Link
                to={s.link}
                className="img-zoom group relative block h-[380px] overflow-hidden rounded-[28px] sm:h-[440px]"
              >
                <img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/25 to-ink/10 transition-opacity duration-500" />

                {/* index */}
                <span className="absolute left-6 top-6 font-display text-sm tracking-widest text-white/70">
                  /{s.id}
                </span>

                {/* arrow */}
                <span className="absolute right-6 top-6 grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition-all duration-500 group-hover:rotate-45 group-hover:border-brand group-hover:bg-brand">
                  <ArrowUpRight size={18} />
                </span>

                <div className="absolute inset-x-6 bottom-6">
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="mt-3 font-display text-4xl uppercase text-white sm:text-5xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-500 group-hover:opacity-100 sm:translate-y-2 sm:group-hover:translate-y-0">
                    {s.desc}
                  </p>
                </div>

                {/* red bottom sweep */}
                <span className="absolute bottom-0 left-0 h-1.5 w-0 bg-brand transition-all duration-700 ease-out group-hover:w-full" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
