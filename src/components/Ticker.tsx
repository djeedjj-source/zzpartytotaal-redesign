import { SparkStar } from "./ui";

const WORDS = [
  "Meubilair",
  "Tenten & Parasols",
  "Buffetten & Barren",
  "Glaswerk & Servies",
  "Dranken",
  "Catering",
  "Koeling & Tap",
  "Aankleding & Decoratie",
  "Evenementen",
  "BBQ & Keuken",
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((w) => (
        <span key={w} className="flex items-center">
          <span className="whitespace-nowrap px-6 font-display text-2xl uppercase tracking-wide text-white sm:px-8 sm:text-3xl">
            {w}
          </span>
          <SparkStar className="h-4 w-4 shrink-0 text-ink/70" />
        </span>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="relative z-20 -my-5 select-none overflow-hidden">
      <div className="-rotate-[1.2deg] scale-[1.02]">
        <div className="flex w-max animate-marquee border-y-4 border-ink bg-brand py-4 will-change-transform">
          <Row />
          <Row />
        </div>
      </div>
    </div>
  );
}
