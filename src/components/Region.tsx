import { MapPin } from "lucide-react";
import { Reveal, SectionTag, SparkStar } from "./ui";

const TOWNS = [
  { name: "Ochten", big: true },
  { name: "Dodewaard" },
  { name: "Buren" },
  { name: "Culemborg", big: true },
  { name: "De Bilt" },
  { name: "De Meern" },
  { name: "Doorn" },
  { name: "Tiel", big: true },
  { name: "Hilversum" },
  { name: "Houten" },
  { name: "Gorinchem" },
  { name: "Zetten" },
  { name: "Andelst" },
  { name: "Nijmegen", big: true },
  { name: "Arnhem", big: true },
  { name: "Geldermalsen" },
  { name: "Maurik" },
  { name: "Rhenen" },
];

export default function Region() {
  return (
    <section id="werkgebied" className="relative scroll-mt-16 overflow-hidden bg-blush text-ink">
      <div className="mx-auto max-w-[1520px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="max-w-2xl">
            <Reveal>
              <SectionTag>Werkgebied</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,6vw,5.4rem)] uppercase leading-[0.95]">
                Centraal in Ochten.
                <br />
                <span className="text-brand">Actief in heel NL.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-7 max-w-lg text-base leading-relaxed text-ink/65">
                Vanuit onze centraal gelegen locatie in Ochten leveren wij in
                heel Nederland — van een biertafelset om de hoek tot complete
                evenementeninrichting aan de andere kant van het land.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <a
              href="https://maps.google.com/?q=Industrieweg+22+Ochten"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border-2 border-ink/10 bg-white p-5 transition-all hover:-translate-y-1 hover:border-brand hover:shadow-[0_20px_50px_rgba(194,14,29,0.15)]"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-white">
                <MapPin size={20} />
              </span>
              <span>
                <span className="block font-display text-lg uppercase leading-tight">
                  Industrieweg 22
                </span>
                <span className="block text-sm font-semibold text-ink/55">
                  4051 BW Ochten — route bekijken
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        {/* Town tapestry */}
        <Reveal delay={0.1}>
          <p className="mt-16 flex flex-wrap items-baseline gap-x-4 gap-y-2 border-t-2 border-ink/10 pt-12 font-display uppercase leading-none">
            {TOWNS.map((t, i) => (
              <span key={t.name} className="flex items-baseline gap-4">
                <span
                  className={
                    t.big
                      ? "text-4xl text-brand sm:text-5xl"
                      : "text-2xl text-ink/35 transition-colors hover:text-ink sm:text-3xl"
                  }
                >
                  {t.name}
                </span>
                {i < TOWNS.length - 1 && (
                  <SparkStar className="h-3 w-3 shrink-0 text-brand/50" />
                )}
              </span>
            ))}
            <span className="flex items-baseline gap-4">
              <SparkStar className="h-3 w-3 shrink-0 text-brand/50" />
              <span className="font-hand text-3xl normal-case text-ink/60">
                …en overal daartussenin
              </span>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
