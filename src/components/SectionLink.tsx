import type { ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/**
 * A link that scrolls to a section by id. If we're not on the home page,
 * it first navigates home and then scrolls once the content is mounted.
 * Safe for static/single-file hosting since it never relies on real
 * hash-based navigation (which HashRouter reserves for routes).
 */
export default function SectionLink({
  id,
  className,
  children,
  onNavigate,
}: {
  id: string;
  className?: string;
  children: ReactNode;
  onNavigate?: () => void;
}) {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToId = () => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.();
    if (location.pathname === "/") {
      scrollToId();
    } else {
      navigate("/");
      setTimeout(scrollToId, 450);
    }
  };

  return (
    <a href={`/${id}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
