import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, Phone, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRequestList } from "../context/RequestListContext";
import SectionLink from "./SectionLink";
import { LOGO, PHONE, PHONE_HREF } from "./ui";

const NAV = [
  { label: "Verhuur", route: "/assortiment" },
  { label: "Diensten", id: "diensten" },
  { label: "Catering", id: "catering" },
  { label: "Zo werkt het", id: "werkwijze" },
  { label: "Werkgebied", id: "werkgebied" },
  { label: "Contact", id: "contact" },
] as const;

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useRequestList();

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-ink/8 bg-paper/90 text-ink shadow-[0_8px_30px_rgba(11,11,12,0.06)] backdrop-blur-xl"
            : "border-b border-white/0 text-paper"
        }`}
      >
        <div className="mx-auto flex max-w-[1520px] items-center justify-between gap-2 px-3 py-2.5 sm:gap-6 sm:px-8 sm:py-3"> 
          {/* Logo sticker */}
          <Link to="/" className="group relative min-w-0 shrink" aria-label="ZZ PartyTotaal home">
            <motion.div
                whileHover={{ rotate: 2, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="sticker -rotate-2 rounded-lg bg-white p-0.5 sm:rounded-xl sm:px-2.5 sm:py-1"> 
                <img src={LOGO} alt="ZZ PartyTotaal" className="h-8 w-auto max-w-[120px] object-contain xs:max-w-[150px] sm:h-11 sm:max-w-none" />
              </motion.div>
            </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-7 lg:flex">
            {NAV.map((item) =>
              "route" in item ? (
                <Link
                  key={item.label}
                  to={item.route}
                  className="link-sweep text-[13px] font-semibold uppercase tracking-[0.14em] opacity-80 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </Link>
              ) : (
                <SectionLink
                  key={item.label}
                  id={item.id}
                  className="link-sweep text-[13px] font-semibold uppercase tracking-[0.14em] opacity-80 transition-opacity hover:opacity-100"
                >
                  {item.label}
                </SectionLink>
              )
            )}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <a
              href={PHONE_HREF}
              className={`hidden items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-bold transition-colors md:flex ${
                scrolled
                  ? "border-ink/15 hover:border-brand hover:text-brand"
                  : "border-white/25 hover:border-brand-bright hover:text-brand-bright"
              }`}
            >
              <Phone size={15} strokeWidth={2.5} />
              {PHONE}
            </a>

            {/* Request bag */}
            <button
              onClick={() => setCartOpen(true)}
              aria-label="Aanvraaglijst openen"
              className={`relative grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full border transition-colors ${
                scrolled
                  ? "border-ink/15 hover:border-brand hover:text-brand"
                  : "border-white/25 hover:border-brand-bright hover:text-brand-bright"
              }`}
            >
              <ShoppingBag size={18} />
              {count > 0 && (
                <span className="absolute -right-1.5 -top-1.5 grid h-5 min-w-5 place-items-center rounded-full bg-brand px-1 text-[10px] font-bold text-white">
                  {count}
                </span>
              )}
            </button>

            <SectionLink
              id="contact"
              className="group hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_rgba(194,14,29,0.4)] transition-all hover:bg-brand-bright hover:shadow-[0_8px_28px_rgba(194,14,29,0.55)] sm:flex"
            >
              Offerte aanvragen
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </SectionLink>

            <button
              onClick={() => setOpen(true)}
              aria-label="Menu openen"
              className={`grid h-9 w-9 sm:h-11 sm:w-11 place-items-center rounded-full border transition-colors lg:hidden ${
                scrolled ? "border-ink/15 hover:border-brand" : "border-white/25 hover:border-brand-bright"
              }`}
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ---- Full-screen menu ---- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-brand text-white"
          >
            <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_80%_10%,rgba(0,0,0,0.25),transparent)]" />
            <div className="relative flex items-center justify-between px-5 py-3 sm:px-8">
              <div className="sticker -rotate-2 rounded-xl bg-white px-3 py-1.5">
                <img src={LOGO} alt="ZZ PartyTotaal" className="h-11 w-auto" />
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Menu sluiten"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/30 transition-colors hover:bg-white hover:text-brand"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="relative flex flex-1 flex-col justify-center gap-1 px-6 sm:px-12">
              {NAV.map((item, i) => (
                <div key={item.label} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{
                      duration: 0.6,
                      delay: 0.08 + i * 0.06,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {"route" in item ? (
                      <Link
                        to={item.route}
                        onClick={() => setOpen(false)}
                        className="group flex items-baseline gap-4 py-1"
                      >
                        <span className="font-display text-sm text-white/50">
                          0{i + 1}
                        </span>
                        <span className="font-display text-5xl uppercase leading-none transition-transform duration-300 group-hover:translate-x-3 sm:text-7xl">
                          {item.label}
                        </span>
                      </Link>
                    ) : (
                      <SectionLink
                        id={item.id}
                        onNavigate={() => setOpen(false)}
                        className="group flex items-baseline gap-4 py-1"
                      >
                        <span className="font-display text-sm text-white/50">
                          0{i + 1}
                        </span>
                        <span className="font-display text-5xl uppercase leading-none transition-transform duration-300 group-hover:translate-x-3 sm:text-7xl">
                          {item.label}
                        </span>
                      </SectionLink>
                    )}
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5 }}
              className="relative flex flex-wrap items-center justify-between gap-4 border-t border-white/20 px-6 py-6 text-sm font-semibold sm:px-12"
            >
              <span className="font-hand text-2xl text-white/90">
                Jouw feest, onze zorg.
              </span>
              <a href={PHONE_HREF} className="flex items-center gap-2 text-lg">
                <Phone size={16} /> {PHONE}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
