import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LOGO } from "./ui";

export default function Preloader({ onDone }: { onDone: () => void }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const started = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - started) / 1500);
      setCount(Math.round(p * 100));
      if (p < 1) requestAnimationFrame(tick);
      else setTimeout(onDone, 350);
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid place-items-center bg-ink"
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(194,14,29,0.22),transparent_70%)]" />

      <div className="relative flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className="flex items-center rounded-full bg-white p-1.5 shadow-2xl ring-2 ring-brand/20"
          >
           <img
            src={LOGO}
            alt="ZZ PartyTotaal"
            className="h-14 w-auto rounded-full object-contain sm:h-18"
           />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-6 font-hand text-2xl text-brand-bright"
        >
          het totale partyconcept
        </motion.p>
      </div>

      <div className="absolute bottom-10 left-1/2 w-56 -translate-x-1/2">
        <div className="flex items-end justify-between text-[11px] font-bold uppercase tracking-[0.3em] text-paper/50">
          <span>Laden</span>
          <span className="font-display text-2xl tracking-normal text-paper">
            {count}%
          </span>
        </div>
        <div className="mt-2 h-[3px] overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-100"
            style={{ width: `${count}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
}
