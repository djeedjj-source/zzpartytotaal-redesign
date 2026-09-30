import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { useRef } from "react";
import SectionLink from "./SectionLink";
import { SparkStar } from "./ui";

const HERO_IMG =
  "https://images.pexels.com/photos/34597472/pexels-photo-34597472.jpeg?auto=compress&cs=tinysrgb&w=2000";

const line = {
  hidden: { y: "115%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 1, delay: 0.55 + i * 0.13, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const rise = useTransform(scrollYProgress, [0, 0.7], [0, -60]);

  return (
    <section ref={ref} id="top" className="noise relative min-h-svh overflow-hidden bg-ink">
      {/* Background */}
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Feestelijke avond met sfeerverlichting en gedekte tafels"
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/35 to-ink" />
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_70%_30%,transparent,rgba(11,11,12,0.5))]" />

      {/* Content */}
      <motion.div
        style={{ opacity: fade, y: rise }}
        className="relative z-10 mx-auto flex min-h-svh max-w-[1520px] flex-col justify-end px-5 pb-10 pt-32 sm:px-8"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5 flex flex-wrap items-center gap-x-4 gap-y-2"
        >
          <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-paper/85 backdrop-blur-sm">
            <Sparkles size={13} className="text-brand-bright" />
            Verhuur · Catering · Dranken · Events
          </span>
          <span className="hidden items-center gap-2 text-[11px] font-bold uppercase tracking-[0.25em] text-paper/60 sm:flex">
            <MapPin size={13} className="text-brand-bright" />
            Vanuit Ochten — heel Nederland
          </span>
        </motion.div>

        {/* Headline */}
        <h1 className="font-display uppercase leading-[0.92] text-paper">
          <span className="block overflow-hidden">
            <motion.span
              variants={line}
              custom={0}
              initial="hidden"
              animate="show"
              className="block text-[clamp(3.4rem,11.5vw,10.5rem)]"
            >
              Jouw feest,
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              variants={line}
              custom={1}
              initial="hidden"
              animate="show"
              className="block text-[clamp(3.4rem,11.5vw,10.5rem)] text-brand-bright"
            >
              onze zorg.
            </motion.span>
          </span>
        </h1>

        {/* Sub + CTAs */}
        <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-base leading-relaxed text-paper/75 sm:text-lg"
          >
            Van statafel tot biertankwagen, van ijskoud glas bier tot compleet
            verzorgde BBQ —{" "}
            <span className="font-hand text-2xl text-brand-bright">
              het totale partyconcept
            </span>{" "}
            voor bruiloften, partijen, festivals en zakelijke events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.12, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <SectionLink
              id="assortiment"
              className="group flex items-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-bold text-white shadow-[0_12px_36px_rgba(194,14,29,0.5)] transition-all hover:bg-brand-bright"
            >
              Bekijk het assortiment
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </SectionLink>
            <SectionLink
              id="contact"
              className="group flex items-center gap-2 rounded-full border border-white/30 px-7 py-4 text-sm font-bold text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper hover:text-ink"
            >
              Vraag een offerte
              <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </SectionLink>
          </motion.div>
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-12 flex items-center justify-between gap-6 border-t border-white/15 pt-5"
        >
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.25em] text-paper/55">
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={14} />
            </motion.span>
            Scroll voor meer
          </div>
          <div className="flex items-center gap-6">
            <span className="hidden text-[11px] font-bold uppercase tracking-[0.25em] text-paper/55 md:block">
              Alles voor uw feest — van A tot ZZ
            </span>
            <SparkStar className="h-5 w-5 animate-spin-slow text-brand-bright" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
