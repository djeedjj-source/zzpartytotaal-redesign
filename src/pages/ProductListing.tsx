import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, LayoutGrid, Rows3, Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Reveal, SectionTag, SparkStar } from "../components/ui";
import { CATEGORIES, PRODUCTS, formatEUR } from "../data/products";

type Sort = "populair" | "prijs-laag" | "prijs-hoog" | "naam";

export default function ProductListing() {
  const { categorySlug } = useParams();
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("populair");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [view, setView] = useState<"grid" | "list">("grid");

  const activeCategory = CATEGORIES.find((c) => c.slug === categorySlug);

  const filtered = useMemo(() => {
    let list = PRODUCTS.slice();
    if (categorySlug) {
      list = list.filter((p) => p.categorySlug === categorySlug);
    }
    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.short.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case "prijs-laag":
        list.sort((a, b) => a.priceIncl - b.priceIncl);
        break;
      case "prijs-hoog":
        list.sort((a, b) => b.priceIncl - a.priceIncl);
        break;
      case "naam":
        list.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        list.sort((a, b) => b.reviews - a.reviews);
    }
    return list;
  }, [categorySlug, query, sort]);

  const countFor = (slug: string) => PRODUCTS.filter((p) => p.categorySlug === slug).length;

  return (
    <div className="bg-paper text-ink">
      {/* ---- Banner ---- */}
      <section className="noise relative overflow-hidden bg-ink pb-16 pt-32 text-paper sm:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_80%_0%,rgba(194,14,29,0.28),transparent_60%)]" />
        <div className="relative mx-auto max-w-[1520px] px-5 sm:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-semibold text-paper/50">
            <Link to="/" className="transition-colors hover:text-paper">
              Home
            </Link>
            <ChevronRight size={13} />
            <Link
              to="/assortiment"
              className={`transition-colors hover:text-paper ${!activeCategory ? "text-paper" : ""}`}
            >
              Assortiment
            </Link>
            {activeCategory && (
              <>
                <ChevronRight size={13} />
                <span className="text-paper">{activeCategory.name}</span>
              </>
            )}
          </div>

          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionTag light>
                {activeCategory ? activeCategory.name : "Volledig assortiment"}
              </SectionTag>
              <h1 className="mt-5 font-display text-[clamp(2.6rem,7vw,6rem)] uppercase leading-[0.92]">
                {activeCategory ? (
                  <>
                    {activeCategory.name.split(" ").slice(0, -1).join(" ") || activeCategory.name}
                    <br />
                    <span className="text-brand-bright">
                      {activeCategory.name.split(" ").slice(-1)}
                    </span>
                  </>
                ) : (
                  <>
                    Alles voor
                    <br />
                    <span className="text-brand-bright">uw feest.</span>
                  </>
                )}
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-paper/60">
              {activeCategory
                ? `${countFor(activeCategory.slug)} artikelen in deze categorie — schoon geleverd, snel geregeld.`
                : `${PRODUCTS.length}+ artikelen op voorraad, verdeeld over ${CATEGORIES.length} categorieën. Van statafel tot biertankwagen.`}
            </p>
          </div>

          {/* Search */}
          <div className="mt-9 flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3.5 backdrop-blur-sm sm:max-w-lg">
            <Search size={18} className="shrink-0 text-paper/50" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Zoek een artikel, bv. 'statafel' of 'bierfust'…"
              className="w-full bg-transparent text-sm text-paper placeholder:text-paper/40 focus:outline-none"
            />
            {query && (
              <button onClick={() => setQuery("")} aria-label="Wissen">
                <X size={16} className="text-paper/50 hover:text-paper" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* ---- Content ---- */}
      <div className="mx-auto max-w-[1520px] px-5 py-14 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
          {/* Sidebar (desktop) */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <h3 className="text-[11px] font-bold uppercase tracking-[0.24em] text-ink/45">
                Categorieën
              </h3>
              <ul className="mt-4 space-y-1">
                <li>
                  <Link
                    to="/assortiment"
                    className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                      !activeCategory
                        ? "bg-brand text-white"
                        : "text-ink/70 hover:bg-blush hover:text-brand"
                    }`}
                  >
                    Alle artikelen
                    <span className="opacity-60">{PRODUCTS.length}</span>
                  </Link>
                </li>
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/assortiment/${c.slug}`}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                        activeCategory?.slug === c.slug
                          ? "bg-brand text-white"
                          : "text-ink/70 hover:bg-blush hover:text-brand"
                      }`}
                    >
                      {c.name}
                      <span className="opacity-60">{countFor(c.slug)}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 rounded-2xl bg-brand p-5 text-white">
                <SparkStar className="h-6 w-6 animate-spin-slow" />
                <p className="mt-3 font-display text-lg uppercase leading-tight">
                  Niet gevonden
                  <br />
                  wat u zoekt?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/80">
                  Wij hebben nog duizenden artikelen niet online. Bel ons
                  gerust.
                </p>
                <a
                  href="tel:+31344644399"
                  className="mt-4 inline-block rounded-full bg-white px-4 py-2 text-xs font-bold text-brand"
                >
                  0344 644399
                </a>
              </div>
            </div>
          </aside>

          {/* Main */}
          <div>
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-ink/8 pb-4">
              <button
                onClick={() => setFiltersOpen(true)}
                className="flex items-center gap-2 rounded-full border-2 border-ink/10 px-4 py-2.5 text-sm font-bold lg:hidden"
              >
                <SlidersHorizontal size={15} />
                Categorieën
              </button>

              <p className="text-sm font-semibold text-ink/55">
                <span className="text-ink">{filtered.length}</span> resultaten
              </p>

              <div className="flex items-center gap-3">
                <div className="hidden items-center gap-1 rounded-full border-2 border-ink/10 p-1 sm:flex">
                  <button
                    onClick={() => setView("grid")}
                    aria-label="Grid weergave"
                    className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${
                      view === "grid" ? "bg-brand text-white" : "text-ink/50"
                    }`}
                  >
                    <LayoutGrid size={15} />
                  </button>
                  <button
                    onClick={() => setView("list")}
                    aria-label="Lijst weergave"
                    className={`grid h-8 w-8 place-items-center rounded-full transition-colors ${
                      view === "list" ? "bg-brand text-white" : "text-ink/50"
                    }`}
                  >
                    <Rows3 size={15} />
                  </button>
                </div>

                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as Sort)}
                  className="rounded-full border-2 border-ink/10 bg-white px-4 py-2.5 text-sm font-bold focus:border-brand focus:outline-none"
                >
                  <option value="populair">Meest populair</option>
                  <option value="prijs-laag">Prijs: laag - hoog</option>
                  <option value="prijs-hoog">Prijs: hoog - laag</option>
                  <option value="naam">Naam A-Z</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center gap-3 py-24 text-center">
                <p className="font-display text-2xl uppercase">Geen resultaten</p>
                <p className="max-w-xs text-sm text-ink/55">
                  Pas uw zoekterm aan of bekijk het volledige assortiment.
                </p>
              </div>
            ) : view === "grid" ? (
              <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p, i) => (
                  <ProductCard key={p.slug} product={p} delay={(i % 6) * 0.05} />
                ))}
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {filtered.map((p, i) => (
                  <Reveal key={p.slug} delay={(i % 6) * 0.04}>
                    <Link
                      to={`/product/${p.slug}`}
                      className="group flex items-center gap-5 rounded-2xl border-2 border-ink/8 bg-white p-4 transition-all hover:border-brand hover:shadow-[0_16px_36px_rgba(194,14,29,0.1)]"
                    >
                      <img
                        src={p.img}
                        alt={p.name}
                        className="h-24 w-24 shrink-0 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] font-bold uppercase tracking-wide text-brand/80">
                          {p.category}
                        </p>
                        <h3 className="mt-1 truncate font-display text-lg uppercase group-hover:text-brand">
                          {p.name}
                        </h3>
                        <p className="mt-1 line-clamp-1 text-sm text-ink/55">{p.short}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-display text-xl">€ {formatEUR(p.priceIncl)}</p>
                        <p className="text-[11px] text-ink/45">{p.unit}</p>
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter sheet */}
      <AnimatePresence>
        {filtersOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFiltersOpen(false)}
              className="fixed inset-0 z-[70] bg-ink/60 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
              className="fixed inset-x-0 bottom-0 z-[80] max-h-[75vh] overflow-y-auto rounded-t-[28px] bg-white p-6 lg:hidden"
            >
              <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-ink/15" />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl uppercase">Categorieën</h3>
                <button onClick={() => setFiltersOpen(false)} aria-label="Sluiten">
                  <X size={20} />
                </button>
              </div>
              <ul className="mt-4 space-y-1">
                <li>
                  <Link
                    to="/assortiment"
                    onClick={() => setFiltersOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold ${
                      !activeCategory ? "bg-brand text-white" : "bg-paper text-ink/70"
                    }`}
                  >
                    Alle artikelen
                    <span className="opacity-60">{PRODUCTS.length}</span>
                  </Link>
                </li>
                {CATEGORIES.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/assortiment/${c.slug}`}
                      onClick={() => setFiltersOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-3 text-sm font-semibold ${
                        activeCategory?.slug === c.slug
                          ? "bg-brand text-white"
                          : "bg-paper text-ink/70"
                      }`}
                    >
                      {c.name}
                      <span className="opacity-60">{countFor(c.slug)}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
