import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Reveal, SectionTag, SparkStar } from "./ui";

type Cat = {
  title: string;
  note: string;
  count: string;
  img: string;
  slug: string;
};

const CATS: Cat[] = [
  {
    title: "Meubilair & Inrichting",
    note: "Statafels, stoelen, banken & zuilen",
    count: "120+ artikelen",
    img: "https://images.pexels.com/photos/16985105/pexels-photo-16985105.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "meubilair-en-inrichting",
  },
  {
    title: "Aankleding & Decoratie",
    note: "Linnen, groen & tafelaankleding",
    count: "60+ artikelen",
    img: "https://images.pexels.com/photos/19986483/pexels-photo-19986483.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "aankleding-linnen-en-decoratie",
  },
  {
    title: "Buffetten & Barren",
    note: "Barren, buffetten & tapapparatuur",
    count: "45+ artikelen",
    img: "https://images.pexels.com/photos/2216402/pexels-photo-2216402.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "buffetten-en-barren",
  },
  {
    title: "Glaswerk, Servies & Bestek",
    note: "Van wijnglas tot whiskykrat",
    count: "90+ artikelen",
    img: "https://images.pexels.com/photos/29811325/pexels-photo-29811325.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "glaswerk-servies-bestek",
  },
  {
    title: "Evenement & Benodigdheden",
    note: "Podia, vloeren, licht & stroom",
    count: "150+ artikelen",
    img: "https://images.pexels.com/photos/36513643/pexels-photo-36513643.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "evenement-en-benodigdheden",
  },
  {
    title: "Koel, Vries & Keuken",
    note: "BBQ's, koeling & koffiezet",
    count: "55+ artikelen",
    img: "https://images.pexels.com/photos/39639839/pexels-photo-39639839.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "",
  },
  {
    title: "Tenten & Parasols",
    note: "Partytenten & stretchtenten",
    count: "30+ artikelen",
    img: "https://images.pexels.com/photos/29093819/pexels-photo-29093819.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "tenten-en-parasols",
  },
  {
    title: "Drinks",
    note: "Bier, wijn, fris & gedistileerd",
    count: "80+ artikelen",
    img: "https://images.pexels.com/photos/15138585/pexels-photo-15138585.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "drinks",
  },
  {
    title: "Food",
    note: "Ontbijt, lunch, diner & BBQ",
    count: "40+ arrangementen",
    img: "https://images.pexels.com/photos/37113988/pexels-photo-37113988.jpeg?auto=compress&cs=tinysrgb&w=900",
    slug: "",
  },
];

function Card({ cat, index }: { cat: Cat; index: number; key?: string }) {
  return (
    <Link
      to={cat.slug ? `/assortiment/${cat.slug}` : "/assortiment"}
      className="img-zoom group relative block h-[460px] w-[82vw] shrink-0 snap-center overflow-hidden rounded-[26px] sm:w-[420px] md:h-[520px]"
    >
      <img
        src={cat.img}
        alt={cat.title}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/20 to-ink/30" />

      <span className="absolute left-5 top-5 rounded-full bg-paper px-3.5 py-1.5 font-display text-xs tracking-wider text-ink">
        {String(index + 1).padStart(2, "0")}
      </span>
      <span className="absolute right-5 top-5 rounded-full border border-white/25 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white/85 backdrop-blur-sm">
        {cat.count}
      </span>

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-bright">
            {cat.note}
          </p>
          <h3 className="mt-1.5 font-display text-3xl uppercase leading-[1.02] text-white">
            {cat.title}
          </h3>
        </div>
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:rotate-45">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </Link>
  );
}

function EndCard() {
  return (
    <Link
      to="/assortiment"
      className="group relative flex h-[460px] w-[82vw] shrink-0 snap-center flex-col items-start justify-between overflow-hidden rounded-[26px] bg-brand p-7 sm:w-[420px] md:h-[520px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(80%_70%_at_80%_10%,rgba(0,0,0,0.28),transparent)]" />
      <SparkStar className="relative h-10 w-10 animate-spin-slow text-white/80" />
      <div className="relative">
        <h3 className="font-display text-5xl uppercase leading-[0.95] text-white">
          En nog
          <br />
          véél meer
        </h3>
        <p className="mt-4 max-w-[260px] text-sm leading-relaxed text-white/85">
          Meer dan 5.000 artikelen op voorraad. Vraag vrijblijvend een offerte
          aan voor uw complete feest.
        </p>
        <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-brand transition-transform duration-300 group-hover:scale-105">
          Vraag offerte aan
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}

export default function Assortment() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [dist, setDist] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const pad = window.innerWidth < 640 ? 40 : 128;
      setDist(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + pad));
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 600);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const x = useTransform(scrollYProgress, [0.02, 0.98], [0, -dist]);
  const progress = useTransform(scrollYProgress, [0, 1], ["2%", "100%"]);

  const head = (
    <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <SectionTag>Ons assortiment</SectionTag>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,6.5vw,5.8rem)] uppercase leading-[0.95]">
            Alles voor <span className="text-brand">uw feest.</span>
          </h2>
        </div>
        <p className="hidden max-w-xs items-center gap-3 text-sm font-semibold text-ink/50 md:flex">
          <MoveRight className="shrink-0 text-brand" />
          Scroll rustig door — negen groepen, duizenden artikelen.
        </p>
      </div>
    </div>
  );

  return (
    <div id="assortiment" className="scroll-mt-20">
      {/* ---- Desktop: pinned horizontal scroll ---- */}
      <section
        ref={sectionRef}
        className="relative hidden bg-paper text-ink md:block"
        style={{ height: `${Math.max(200, 150 + CATS.length * 28)}vh` }}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center gap-10 overflow-hidden">
          {head}
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-5 pl-5 will-change-transform sm:pl-8"
          >
            {CATS.map((c, i) => (
              <Card key={c.title} cat={c} index={i} />
            ))}
            <EndCard />
          </motion.div>
          <div className="mx-auto w-full max-w-[1520px] px-5 sm:px-8">
            <div className="h-1 w-full overflow-hidden rounded-full bg-ink/10">
              <motion.div style={{ width: progress }} className="h-full rounded-full bg-brand" />
            </div>
          </div>
        </div>
      </section>

      {/* ---- Mobile: snap carousel ---- */}
      <section className="bg-paper py-20 text-ink md:hidden">
        <Reveal>{head}</Reveal>
        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5">
          {CATS.map((c, i) => (
            <Card key={c.title} cat={c} index={i} />
          ))}
          <EndCard />
        </div>
      </section>
    </div>
  );
}
