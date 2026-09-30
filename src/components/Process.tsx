import { ClipboardList, FileText, PartyPopper, Truck } from "lucide-react";
import { Reveal, SectionTag } from "./ui";

const STEPS = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Kies & combineer",
    desc: "Struin door ruim 5.000 artikelen en stel je wensenlijst samen — van statafel tot stretchtent.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Offerte op maat",
    desc: "Je ontvangt snel een helder voorstel. Bel gerust, wij denken graag mee over je opstelling.",
  },
  {
    icon: Truck,
    step: "03",
    title: "Wij leveren & bouwen",
    desc: "Op tijd op locatie, schoon materiaal en netjes op- en afgebouwd. Precies zoals afgesproken.",
  },
  {
    icon: PartyPopper,
    step: "04",
    title: "Jij geniet",
    desc: "Feest maar! Na afloop halen wij alles weer op. Zorgeloos, van A tot ZZ.",
  },
];

export default function Process() {
  return (
    <section id="werkwijze" className="relative scroll-mt-16 overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-[1520px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Reveal>
              <SectionTag>Zo werkt het</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.8rem)] uppercase leading-[0.95]">
                In vier stappen
                <br />
                <span className="text-brand">feestklaar.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-base leading-relaxed text-ink/60">
              Eén telefoontje is genoeg. Wij zijn uw partner in het plannen,
              organiseren en ondersteunen van uw evenement.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={0.07 * i}>
              <div className="group relative h-full overflow-hidden rounded-[26px] border-2 border-ink/8 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-brand hover:shadow-[0_28px_60px_rgba(194,14,29,0.14)]">
                <span className="absolute -right-3 -top-6 font-display text-[7rem] leading-none text-ink/[0.05] transition-colors duration-500 group-hover:text-brand/10">
                  {s.step}
                </span>

                <span className="relative grid h-13 w-13 place-items-center rounded-2xl bg-blush text-brand transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  <s.icon size={22} strokeWidth={2.2} />
                </span>

                <h3 className="relative mt-6 font-display text-2xl uppercase leading-tight">
                  {s.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-ink/60">
                  {s.desc}
                </p>

                <span className="absolute bottom-0 left-0 h-1 w-0 bg-brand transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-center font-hand text-3xl text-brand">
            En het mooiste? U heeft maar één aanspreekpunt.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
