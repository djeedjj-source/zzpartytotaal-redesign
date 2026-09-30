import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Product } from "../data/products";

export type RequestItem = {
  slug: string;
  name: string;
  img: string;
  unit: string;
  priceExcl: number;
  priceIncl: number;
  qty: number;
};

type Ctx = {
  items: RequestItem[];
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (p: Product, qty?: number) => void;
  remove: (slug: string) => void;
  updateQty: (slug: string, qty: number) => void;
  clear: () => void;
  count: number;
  totalExcl: number;
  totalIncl: number;
};

const RequestListCtx = createContext<Ctx | null>(null);
const STORAGE_KEY = "zz-aanvraaglijst";

export function RequestListProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<RequestItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as RequestItem[]) : [];
    } catch {
      return [];
    }
  });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore */
    }
  }, [items]);

  const add = useCallback((p: Product, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.slug === p.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === p.slug ? { ...i, qty: i.qty + qty } : i
        );
      }
      return [
        ...prev,
        {
          slug: p.slug,
          name: p.name,
          img: p.img,
          unit: p.unit,
          priceExcl: p.priceExcl,
          priceIncl: p.priceIncl,
          qty,
        },
      ];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((slug: string) => {
    setItems((prev) => prev.filter((i) => i.slug !== slug));
  }, []);

  const updateQty = useCallback((slug: string, qty: number) => {
    setItems((prev) =>
      prev.map((i) => (i.slug === slug ? { ...i, qty: Math.max(1, qty) } : i))
    );
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const count = useMemo(() => items.reduce((s, i) => s + i.qty, 0), [items]);
  const totalExcl = useMemo(
    () => items.reduce((s, i) => s + i.qty * i.priceExcl, 0),
    [items]
  );
  const totalIncl = useMemo(
    () => items.reduce((s, i) => s + i.qty * i.priceIncl, 0),
    [items]
  );

  return (
    <RequestListCtx.Provider
      value={{ items, open, setOpen, add, remove, updateQty, clear, count, totalExcl, totalIncl }}
    >
      {children}
    </RequestListCtx.Provider>
  );
}

export function useRequestList() {
  const ctx = useContext(RequestListCtx);
  if (!ctx) throw new Error("useRequestList must be used within RequestListProvider");
  return ctx;
}
