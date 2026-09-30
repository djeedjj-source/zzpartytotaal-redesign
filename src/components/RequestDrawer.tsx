import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useRequestList } from "../context/RequestListContext";
import { formatEUR } from "../data/products";
import SectionLink from "./SectionLink";

export default function RequestDrawer() {
  const { items, open, setOpen, remove, updateQty, totalExcl, totalIncl } =
    useRequestList();

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[70] bg-ink/60 backdrop-blur-sm"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-y-0 right-0 z-[80] flex w-full max-w-md flex-col bg-paper text-ink shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-ink/10 px-6 py-5">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white">
                  <ShoppingBag size={18} />
                </span>
                <div>
                  <h3 className="font-display text-xl uppercase leading-none">
                    Uw aanvraag
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-ink/50">
                    {items.length} {items.length === 1 ? "artikel" : "artikelen"}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Sluiten"
                className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 transition-colors hover:border-brand hover:text-brand"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-blush text-brand">
                    <ShoppingBag size={26} />
                  </span>
                  <p className="font-display text-lg uppercase">Nog leeg</p>
                  <p className="max-w-[220px] text-sm text-ink/55">
                    Blader door ons assortiment en voeg artikelen toe aan uw
                    aanvraag.
                  </p>
                  <Link
                    to="/assortiment"
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-bright"
                  >
                    Bekijk assortiment
                  </Link>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.slug}
                      className="flex gap-4 rounded-2xl border-2 border-ink/8 bg-white p-3"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="h-20 w-20 shrink-0 rounded-xl object-cover"
                      />
                      <div className="flex flex-1 flex-col justify-between">
                        <div className="flex items-start justify-between gap-2">
                          <Link
                            to={`/product/${item.slug}`}
                            onClick={() => setOpen(false)}
                            className="text-sm font-bold leading-snug hover:text-brand"
                          >
                            {item.name}
                          </Link>
                          <button
                            onClick={() => remove(item.slug)}
                            aria-label="Verwijderen"
                            className="shrink-0 text-ink/30 transition-colors hover:text-brand"
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 rounded-full border border-ink/15 px-1.5 py-1">
                            <button
                              onClick={() => updateQty(item.slug, item.qty - 1)}
                              className="grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-blush hover:text-brand"
                              aria-label="Minder"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-5 text-center text-sm font-bold">
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.slug, item.qty + 1)}
                              className="grid h-6 w-6 place-items-center rounded-full transition-colors hover:bg-blush hover:text-brand"
                              aria-label="Meer"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-brand">
                            € {formatEUR(item.priceIncl * item.qty)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t-2 border-ink/10 px-6 py-5">
                <div className="flex items-center justify-between text-sm text-ink/55">
                  <span>Subtotaal excl. BTW</span>
                  <span className="font-semibold text-ink">
                    € {formatEUR(totalExcl)}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-sm font-bold">Totaal incl. BTW</span>
                  <span className="font-display text-2xl text-brand">
                    € {formatEUR(totalIncl)}
                  </span>
                </div>
                <SectionLink
                  id="contact"
                  onNavigate={() => setOpen(false)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-brand px-6 py-4 text-sm font-bold text-white shadow-[0_12px_30px_rgba(194,14,29,0.35)] transition-colors hover:bg-brand-bright"
                >
                  Aanvraag versturen
                </SectionLink>
                <p className="mt-3 text-center text-[11px] text-ink/40">
                  Vrijblijvend — u ontvangt binnen 1 werkdag een offerte.
                </p>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
