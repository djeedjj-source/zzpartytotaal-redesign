import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LOGO } from "./ui";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1300);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-brand"
    >
      {/* Diagonaal watermerk / achtergrondgloed */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15),transparent_70%)]" />

      {/* Bakwagen-stijl oversized sticker logo */}
      <motion.div
        initial={{ scale: 0.8, rotate: -12, opacity: 0 }}
        animate={{ scale: 1, rotate: -5, opacity: 1 }}
        exit={{ scale: 1.15, opacity: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 14 }}
        className="sticker relative max-w-none rounded-2xl bg-white p-2 shadow-[0_25px_60px_rgba(0,0,0,0.5)] sm:p-4"
      >
        <img
          src={LOGO}
          alt="ZZ PartyTotaal"
          className="h-auto w-[85vw] max-w-[900px] rounded-xl object-contain sm:w-[70vw]"
        />
        <div class="preloader-track">
          <div class="preloader-bar"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}