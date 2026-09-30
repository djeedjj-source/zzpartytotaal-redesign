import { motion } from "framer-motion";
import {
  Calendar,
  Check,
  ChevronRight,
  Minus,
  Package,
  Phone,
  Plus,
  RotateCcw,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";
import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { Reveal, SectionTag, SparkStar } from "../components/ui";
import { useRequestList } from "../context/RequestListContext";
import { formatEUR, getProduct, getRelated } from "../data/products";

const TABS = ["Beschrijving", "Specificaties", "Bezorging & Retour"] as const;

export default function ProductDetail() {
  const { slug } = useParams();
  const product = slug ? getProduct(slug) : undefined;
  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState<(typeof TABS)[number]>("Beschrijving");
  const { add } = useRequestList();

  if (!product) return <Navigate to="/assortiment" replace />;

  const related = getRelated(product, 4);

  return (
    <div className="bg-paper text-ink">
      {/* Breadcrumb */}
      <div className="border-b border-ink/8 bg-white pt-24 sm:pt-28">
        <div className="mx-auto flex max-w-[1520px] flex-wrap items-center gap-2 px-5 py-4 text-xs font-semibold text-ink/50 sm:px-8">
          <Link to="/" className="transition-colors hover:text-brand">
            Home
          </Link>
          <ChevronRight size={13} />
          <Link to="/assortiment" className="transition-colors hover:text-brand">
            Assortiment
          </Link>
          <ChevronRight size={13} />
          <Link
            to={`/assortiment/${product.categorySlug}`}
            className="transition-colors hover:text-brand"
          >
            {product.category}
          </Link>
          <ChevronRight size={13} />
          <span className="text-ink">{product.name}</span>
        </div>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-[1520px] px-5 py-10 sm:px-8 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Gallery */}
          <div>
            <motion.div
              key={activeImg}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden rounded-[28px] bg-white"
            >
              <img
                src={product.gallery[activeImg] ?? product.img}
                alt={product.name}
                className="aspect-square w-full object-cover"
              />
              {product.badge && (
                <span className="absolute left-5 top-5 rounded-full bg-brand px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow">
                  {product.badge}
                </span>
              )}
            </motion.div>

            {product.gallery.length > 1 && (
              <div className="mt-4 flex gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`h-20 w-20 shrink-0 overflow-hidden rounded-2xl border-2 transition-colors ${
                      activeImg === i ? "border-brand" : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img src={g} alt="" className="h-full w-full object-cover" />
                  </button>
                ))}
              </div>
            )}

            {/* USP row */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { icon: Truck, label: "Bezorgd door heel NL" },
                { icon: ShieldCheck, label: "Schoon geleverd" },
                { icon: RotateCcw, label: "Simpel retour" },
              ].map((u) => (
                <div
                  key={u.label}
                  className="flex flex-col items-center gap-2 rounded-2xl border-2 border-ink/8 bg-white p-4 text-center"
                >
                  <u.icon size={20} className="text-brand" />
                  <span className="text-[11px] font-bold leading-tight text-ink/65">
                    {u.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-4xl uppercase leading-[0.98] sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-3 flex items-center gap-3">
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={15}
                    fill={i < Math.round(product.rating) ? "currentColor" : "none"}
                    strokeWidth={1.5}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-ink/60">
                {product.rating.toFixed(1)} ({product.reviews} reviews)
              </span>
              <span className="h-1 w-1 rounded-full bg-ink/20" />
              <span className="flex items-center gap-1.5 text-sm font-semibold text-emerald-600">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Op voorraad ({product.stock}+)
              </span>
            </div>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/65">
              {product.short}
            </p>

            {/* Price block */}
            <div className="mt-7 flex flex-wrap items-end gap-4 rounded-2xl border-2 border-ink/8 bg-white p-5">
              <div>
                <p className="font-display text-4xl leading-none text-brand">
                  € {formatEUR(product.priceIncl)}
                </p>
                <p className="mt-1.5 text-xs font-semibold text-ink/50">
                  excl. BTW € {formatEUR(product.priceExcl)} · {product.unit}
                </p>
              </div>
              <span className="ml-auto flex items-center gap-1.5 rounded-full bg-blush px-3.5 py-1.5 text-xs font-bold text-brand">
                <Package size={13} /> Vrijblijvende aanvraag
              </span>
            </div>

            {/* Huurperiode */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/55">
                  <Calendar size={13} /> Van
                </span>
                <input
                  type="date"
                  className="w-full rounded-xl border-2 border-ink/10 px-3.5 py-2.5 text-sm font-semibold focus:border-brand focus:outline-none"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink/55">
                  <Calendar size={13} /> Tot en met
                </span>
                <input
                  type="date"
                  className="w-full rounded-xl border-2 border-ink/10 px-3.5 py-2.5 text-sm font-semibold focus:border-brand focus:outline-none"
                />
              </label>
            </div>

            {/* Qty + CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border-2 border-ink/10 px-2 py-2">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  aria-label="Minder"
                  className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-blush hover:text-brand"
                >
                  <Minus size={15} />
                </button>
                <span className="w-8 text-center font-display text-lg">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  aria-label="Meer"
                  className="grid h-9 w-9 place-items-center rounded-full transition-colors hover:bg-blush hover:text-brand"
                >
                  <Plus size={15} />
                </button>
              </div>

              <button
                onClick={() => add(product, qty)}
                className="group flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(194,14,29,0.4)] transition-all hover:bg-brand-bright sm:flex-none"
              >
                <ShoppingBag size={17} />
                Toevoegen aan aanvraag
              </button>

              <a
                href="tel:+31344644399"
                className="flex items-center gap-2 rounded-full border-2 border-ink/15 px-6 py-4 text-sm font-bold transition-colors hover:border-brand hover:text-brand"
              >
                <Phone size={16} />
                Bel ons
              </a>
            </div>

            <p className="mt-5 font-hand text-2xl text-brand">
              Vandaag besteld, dit weekend gebracht.
            </p>

            {/* Tabs */}
            <div className="mt-10 border-t-2 border-ink/8 pt-6">
              <div className="flex flex-wrap gap-2">
                {TABS.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                      tab === t ? "bg-ink text-white" : "bg-white text-ink/55 hover:bg-blush hover:text-brand"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              <div className="mt-5 min-h-[140px]">
                {tab === "Beschrijving" && (
                  <div className="space-y-3">
                    {product.description.map((p, i) => (
                      <p key={i} className="text-sm leading-relaxed text-ink/65">
                        {p}
                      </p>
                    ))}
                  </div>
                )}
                {tab === "Specificaties" && (
                  <dl className="divide-y divide-ink/8 rounded-2xl border-2 border-ink/8 bg-white">
                    {product.specs.map((s) => (
                      <div key={s.label} className="flex justify-between gap-4 px-4 py-3 text-sm">
                        <dt className="font-semibold text-ink/55">{s.label}</dt>
                        <dd className="text-right font-bold text-ink">{s.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                {tab === "Bezorging & Retour" && (
                  <ul className="space-y-3">
                    {[
                      "Bezorging in heel Nederland, vanuit onze locatie in Ochten.",
                      "Op locatie afgeleverd op de afgesproken dag en tijd.",
                      "Schoon geleverd — retour hoeft u niet schoon te maken.",
                      "Ophalen na afloop in overleg, meestal de eerstvolgende werkdag.",
                    ].map((l) => (
                      <li key={l} className="flex items-start gap-2.5 text-sm text-ink/65">
                        <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                        {l}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t-2 border-ink/8 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1520px] px-5 sm:px-8">
            <Reveal>
              <SectionTag>Vaak gecombineerd met</SectionTag>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-3xl uppercase sm:text-4xl">
                Maak het compleet
              </h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {related.map((p, i) => (
                <ProductCard key={p.slug} product={p} delay={i * 0.06} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Mini CTA */}
      <section className="noise relative overflow-hidden bg-brand py-16 text-center text-white sm:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(80%_80%_at_50%_120%,rgba(0,0,0,0.3),transparent)]" />
        <div className="relative mx-auto max-w-2xl px-5">
          <SparkStar className="mx-auto h-8 w-8 animate-spin-slow" />
          <h2 className="mt-4 font-display text-3xl uppercase sm:text-4xl">
            Twijfelt u nog over het aantal?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/85">
            Wij denken graag mee over de juiste hoeveelheden voor uw feest —
            bel gerust voor persoonlijk advies.
          </p>
          <a
            href="tel:+31344644399"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand"
          >
            <Phone size={16} /> 0344 644399
          </a>
        </div>
      </section>
    </div>
  );
}
