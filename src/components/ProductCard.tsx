import { Plus, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useRequestList } from "../context/RequestListContext";
import { formatEUR, type Product } from "../data/products";
import { Reveal } from "./ui";

export default function ProductCard({
  product,
  delay = 0,
}: {
  product: Product;
  delay?: number;
}) {
  const { add } = useRequestList();

  return (
    <Reveal delay={delay}>
      <div className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border-2 border-ink/8 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-brand hover:shadow-[0_24px_50px_rgba(194,14,29,0.14)]">
        <Link
          to={`/product/${product.slug}`}
          className="img-zoom relative block aspect-[4/3] overflow-hidden bg-paper"
        >
          <img
            src={product.img}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow">
              {product.badge}
            </span>
          )}
          <button
            onClick={(e) => {
              e.preventDefault();
              add(product, 1);
            }}
            aria-label="Toevoegen aan aanvraag"
            className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white text-ink shadow-md transition-all duration-300 hover:bg-brand hover:text-white active:scale-90"
          >
            <Plus size={16} strokeWidth={2.5} />
          </button>
        </Link>

        <div className="flex flex-1 flex-col p-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand/80">
            {product.category}
          </p>
          <Link to={`/product/${product.slug}`}>
            <h3 className="mt-1.5 font-display text-lg uppercase leading-tight text-ink transition-colors group-hover:text-brand">
              {product.name}
            </h3>
          </Link>

          <div className="mt-1.5 flex items-center gap-1.5">
            <div className="flex items-center gap-0.5 text-amber-400">
              <Star size={13} fill="currentColor" strokeWidth={0} />
            </div>
            <span className="text-xs font-semibold text-ink/60">
              {product.rating.toFixed(1)}
            </span>
            <span className="text-xs text-ink/35">({product.reviews})</span>
          </div>

          <div className="mt-auto flex items-end justify-between pt-4">
            <div>
              <p className="font-display text-2xl leading-none text-ink">
                € {formatEUR(product.priceIncl)}
              </p>
              <p className="mt-1 text-[11px] text-ink/45">
                excl. € {formatEUR(product.priceExcl)} · {product.unit}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
