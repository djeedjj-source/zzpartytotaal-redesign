import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Counter, LOGO, Reveal, SectionTag, SquiggleArrow } from "./ui";

const IMG_MAIN =
  "https://images.pexels.com/photos/5638817/pexels-photo-5638817.jpeg?auto=compress&cs=tinysrgb&w=1200";
const IMG_SMALL =
  "https://images.pexels.com/photos/20303995/pexels-photo-20303995.jpeg?auto=compress&cs=tinysrgb&w=800";

const USPS = [
  "Meubilair & inrichting",
  "Barren, taps & koelwagens",
  "Complete dranken-arrangementen",
  "Bezorging door heel Nederland",
];

const STATS = [
  { value: 5000, suffix: "+", label: "Artikelen op voorraad" },
  { value: 350, suffix: "+", label: "Evenementen per jaar" },
  { value: 9, suffix: "", label: "Assortimentsgroepen" },
  { value: 100, suffix: "%", label: "Zorgeloos ontzorgd" },
];

export default function Intro() {
  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div className="mx-auto max-w-[1520px] px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-12">
          {/* Text column */}
          <div className="lg:col-span-7">
            <Reveal>
              <SectionTag>Het totale partyconcept</SectionTag>
            </Reveal>

            <Reveal delay={0.08}>
              <h2 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.8rem)] uppercase leading-[0.95]">
                Van klassiek
                <br />
                tot <span className="text-brand">modern</span> —
                <br />
                <span className="text-outline-ink">wij regelen het.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/70">
                ZZ PartyTotaal is uw partner in het plannen, organiseren en
                ondersteunen van uw evenement. Vakkundig op het gebied van
                bruiloften, partijen, feesten en andere gelegenheden — met de
                uitstraling zoals ú het wilt.
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <ul className="mt-8 grid max-w-xl gap-x-8 gap-y-4 sm:grid-cols-2">
                {USPS.map((u) => (
                  <li key={u} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand text-white">
                      <Check size={13} strokeWidth={3.5} />
                    </span>
                    <span className="text-[15px] font-semibold text-ink/85">{u}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.28}>
              <p className="mt-8 font-hand text-3xl text-brand">
                Jouw feest, onze zorg. Echt waar.
              </p>
            </Reveal>
          </div>

          {/* Collage column */}
          <div className="relative lg:col-span-5">
            <Reveal delay={0.1} className="relative">
              <motion.div
                whileHover={{ rotate: 0, scale: 1.01 }}
                className="img-zoom relative rotate-2 overflow-hidden rounded-[28px] border-4 border-white shadow-[0_30px_60px_rgba(11,11,12,0.18)]"
              >
                <img
                  src={IMG_MAIN}
                  alt="Vrienden dineren onder sfeerverlichting"
                  className="aspect-[4/5] w-full object-cover sm:aspect-[5/5]"
                />
              </motion.div>
            </Reveal>

            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="img-zoom absolute -bottom-10 -left-6 hidden w-44 overflow-hidden rounded-2xl border-4 border-white shadow-[0_20px_50px_rgba(11,11,12,0.25)] sm:block md:w-56"
            >
              <img
                src={IMG_SMALL}
                alt="Champagne wordt geschonken"
                className="aspect-[4/5] w-full object-cover"
              />
            </motion.div>

            {/* Logo sticker — afgeronde rechthoek met subtiele tilt */}
            <motion.div
              initial={{ opacity: 0, scale: 0, rotate: 12 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 160, damping: 12, delay: 0.4 }}
              className="sticker absolute -right-3 -top-6 rounded-xl border-4 border-white bg-ink shadow-xl sm:-right-6 sm:-top-8">
              <img 
                src={LOGO} 
                alt="ZZ PartyTotaal" 
                className="h-12 w-auto rounded-lg object-contain sm:h-16" 
              />
            </motion.div>

            <SquiggleArrow className="absolute -left-14 top-1/3 hidden h-16 w-24 -scale-x-100 text-brand lg:block" />
          </div>
        </div>

        {/* Stats Grid met gegarandeerde tussenruimte tegen overlap */}
        <div className="mt-20 grid grid-cols-2 gap-x-8 gap-y-12 border-t-2 border-ink/10 pt-12 sm:mt-28 sm:gap-x-12 lg:grid-cols-4 lg:gap-x-8">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.06 * i}>
              <div className={`flex flex-col ${i > 0 ? "lg:border-l-2 lg:border-ink/10 lg:pl-8" : ""}`}>
                <div className="font-display text-4xl leading-none text-brand sm:text-5xl lg:text-6xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-ink/65 sm:text-[13px] sm:tracking-[0.18em]">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}