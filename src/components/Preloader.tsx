import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { LogoBadge } from "./ui";

export default function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setDone(true), 1400);
    return () => clearTimeout(timer);
  }, []);

  if (done) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-brand"
    >
      {/* Achtergrondgloed */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.18),transparent_70%)]" />

      {/* Bakwagen-stijl oversized sticker logo */}
      <motion.div
        initial={{ scale: 0.8, rotate: -10, opacity: 0 }}
        animate={{ scale: 1, rotate: -4, opacity: 1 }}
        exit={{ scale: 1.1, opacity: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 14 }}>
        <LogoBadge size="xl" className="border-4 sm:border-[6px]" />
      </motion.div>

      {/* Laadbalk container */}
      <div className="relative z-10 mt-10 h-1.5 w-44 overflow-hidden rounded-full bg-white/20 sm:w-56">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            repeat: Infinity,
            duration: 1.1,
            ease: "easeInOut",
          }}
          className="h-full w-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        />
      </div>
    </motion.div>
  );
}