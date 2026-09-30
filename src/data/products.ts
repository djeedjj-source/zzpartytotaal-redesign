export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  priceExcl: number;
  priceIncl: number;
  unit: string;
  img: string;
  gallery: string[];
  badge?: string;
  rating: number;
  reviews: number;
  short: string;
  description: string[];
  specs: { label: string; value: string }[];
  stock: number;
};

export const CATEGORIES = [
  { name: "Meubilair en Inrichting", slug: "meubilair-en-inrichting" },
  { name: "Aankleding, Linnen & Decoratie", slug: "aankleding-linnen-en-decoratie" },
  { name: "Buffetten en Barren", slug: "buffetten-en-barren" },
  { name: "Glaswerk, Servies & Bestek", slug: "glaswerk-servies-bestek" },
  { name: "Evenement en Benodigdheden", slug: "evenement-en-benodigdheden" },
  { name: "Tenten en Parasols", slug: "tenten-en-parasols" },
  { name: "Drinks", slug: "drinks" },
];

const IMG = {
  statafel: "/products/statafel.jpg",
  stoel: "/products/stoel.jpg",
  glazenkrat: "/products/glazenkrat.jpg",
  dinertafel: "/products/dinertafel.jpg",
  biertap: "/products/biertap.jpg",
  loungebank: "/products/loungebank.jpg",
  chairsLifestyle:
    "https://images.pexels.com/photos/33675928/pexels-photo-33675928.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tableLifestyle:
    "https://images.pexels.com/photos/16985129/pexels-photo-16985129.jpeg?auto=compress&cs=tinysrgb&w=1200",
  glassLifestyle:
    "https://images.pexels.com/photos/19535906/pexels-photo-19535906.jpeg?auto=compress&cs=tinysrgb&w=1200",
  loungeLifestyle:
    "https://images.pexels.com/photos/35985255/pexels-photo-35985255.jpeg?auto=compress&cs=tinysrgb&w=1200",
  bbqLifestyle:
    "https://images.pexels.com/photos/35847872/pexels-photo-35847872.jpeg?auto=compress&cs=tinysrgb&w=1200",
  tentLifestyle:
    "https://images.pexels.com/photos/29093819/pexels-photo-29093819.jpeg?auto=compress&cs=tinysrgb&w=1200",
};

export const PRODUCTS: Product[] = [
  {
    slug: "statafel-wit-110cm",
    name: "Statafel wit 110 cm",
    category: "Meubilair en Inrichting",
    categorySlug: "meubilair-en-inrichting",
    priceExcl: 11.5,
    priceIncl: 13.92,
    unit: "per stuk / per dag",
    img: IMG.statafel,
    gallery: [IMG.statafel, IMG.tableLifestyle, IMG.statafel],
    badge: "Bestseller",
    rating: 4.8,
    reviews: 62,
    short: "Statige witte statafel, hoogte 110 cm — dé klassieker op elk feest.",
    description: [
      "Onze witte statafel is niet voor niets het meest gehuurde artikel uit ons assortiment. Met een hoogte van 110 cm en een stevige, ingekorte voet staat hij op elke ondergrond stabiel — binnen en buiten.",
      "Perfect te combineren met onze statafelrokken, barkrukken of gewoon strak in het wit voor een moderne, tijdloze uitstraling. Geschikt voor borrels, bruiloften, bedrijfsfeesten en beursstands.",
      "Inclusief bezorging, opbouw op aanvraag en ophalen na afloop — u hoeft alleen maar te genieten.",
    ],
    specs: [
      { label: "Afmeting blad", value: "Ø 80 cm" },
      { label: "Hoogte", value: "110 cm" },
      { label: "Kleur", value: "Wit" },
      { label: "Materiaal", value: "Kunststof blad, stalen voet" },
      { label: "Capaciteit", value: "4-6 personen (staand)" },
      { label: "Binnen/buiten", value: "Beide geschikt" },
    ],
    stock: 240,
  },
  {
    slug: "statafelrok-wit",
    name: "Statafelrok wit (100 cm)",
    category: "Aankleding, Linnen & Decoratie",
    categorySlug: "aankleding-linnen-en-decoratie",
    priceExcl: 6.5,
    priceIncl: 7.87,
    unit: "per stuk / per dag",
    img: IMG.dinertafel,
    gallery: [IMG.dinertafel, IMG.tableLifestyle],
    rating: 4.6,
    reviews: 28,
    short: "Strakke witte hoes voor uw statafel — direct een feestelijke uitstraling.",
    description: [
      "Deze elastische statafelrok trekt u zo strak om uw statafel — geen plooien, geen gedoe. Geschikt voor statafels met een hoogte van 110 cm.",
      "Gemaakt van hoogwaardige, kreukherstellende stof die er de hele avond representatief uit blijft zien.",
    ],
    specs: [
      { label: "Hoogte", value: "100 cm" },
      { label: "Kleur", value: "Wit" },
      { label: "Materiaal", value: "Polyester, elastische zoom" },
      { label: "Geschikt voor", value: "Statafel Ø 80 cm, 110 cm hoog" },
    ],
    stock: 180,
  },
  {
    slug: "klapstoel-wit",
    name: "Klapstoel wit (kunststof)",
    category: "Meubilair en Inrichting",
    categorySlug: "meubilair-en-inrichting",
    priceExcl: 1.65,
    priceIncl: 2.0,
    unit: "per stuk / per dag",
    img: IMG.stoel,
    gallery: [IMG.stoel, IMG.chairsLifestyle],
    badge: "Populair",
    rating: 4.7,
    reviews: 94,
    short: "Lichte, stapelbare klapstoel — comfortabel en snel neergezet.",
    description: [
      "Onze witte klapstoel is licht, stapelbaar en supersnel neer te zetten — ideaal voor grote gezelschappen. Stevig genoeg voor een lange feestavond, licht genoeg om zelf te verplaatsen.",
      "Wordt vaak gecombineerd met onze klaptafels en diner-arrangementen voor bruiloften en buurtfeesten.",
    ],
    specs: [
      { label: "Materiaal", value: "Kunststof zitting, stalen frame" },
      { label: "Kleur", value: "Wit" },
      { label: "Stapelbaar", value: "Ja, tot 20 stuks" },
      { label: "Belastbaar tot", value: "120 kg" },
    ],
    stock: 850,
  },
  {
    slug: "klaptafel-180x75",
    name: "Klaptafel 180 x 75 cm",
    category: "Meubilair en Inrichting",
    categorySlug: "meubilair-en-inrichting",
    priceExcl: 9.95,
    priceIncl: 12.04,
    unit: "per stuk / per dag",
    img: IMG.dinertafel,
    gallery: [IMG.dinertafel, IMG.tableLifestyle],
    rating: 4.9,
    reviews: 51,
    short: "Stevige diner- en buffettafel, binnen enkele seconden ingeklapt.",
    description: [
      "Deze robuuste klaptafel is de werkpaard van elk evenement: geschikt als dinertafel, buffettafel of statafel voor materiaal. Inklapbaar onderstel voor eenvoudig transport en opslag.",
      "Combineert perfect met ons linnen, tafelaankleding en stoelenassortiment.",
    ],
    specs: [
      { label: "Afmeting", value: "180 x 75 cm" },
      { label: "Hoogte", value: "74 cm" },
      { label: "Materiaal blad", value: "Wit gemelamineerd" },
      { label: "Capaciteit", value: "6-8 personen" },
    ],
    stock: 310,
  },
  {
    slug: "wiskey-glas-deuk-krat-24",
    name: "Wiskey glas deuk krat 24 stuks",
    category: "Glaswerk, Servies & Bestek",
    categorySlug: "glaswerk-servies-bestek",
    priceExcl: 9.98,
    priceIncl: 12.08,
    unit: "per krat (24 st.) / per dag",
    img: IMG.glazenkrat,
    gallery: [IMG.glazenkrat, IMG.glassLifestyle],
    rating: 4.5,
    reviews: 19,
    short: "Kraakhelder deukglas — de klassieker voor bier, fris en gemengde drankjes.",
    description: [
      "Deze kraat met 24 stevige deukglazen is niet kapot te krijgen en oogt op elk feest representatief. Vaatwasserbestendig gereinigd en direct klaar voor gebruik.",
      "Ideaal te combineren met onze bierfusten, tapinstallaties en drankarrangementen.",
    ],
    specs: [
      { label: "Inhoud", value: "24 glazen per krat" },
      { label: "Volume per glas", value: "250 ml" },
      { label: "Materiaal", value: "Gehard glas" },
      { label: "Reiniging", value: "Schoon geleverd, retour vuil" },
    ],
    stock: 140,
  },
  {
    slug: "bierfust-jupiler-50l",
    name: "Jupiler fust 50 ltr.",
    category: "Drinks",
    categorySlug: "drinks",
    priceExcl: 167.95,
    priceIncl: 203.22,
    unit: "per fust",
    img: IMG.biertap,
    gallery: [IMG.biertap, IMG.glassLifestyle],
    badge: "Topseller",
    rating: 4.9,
    reviews: 133,
    short: "Volledig fust Jupiler — inclusief statiegeldregeling, klaar om te tappen.",
    description: [
      "Een vers fust Jupiler van 50 liter, goed voor zo'n 200 consumpties. Perfect in combinatie met een tapinstallatie en koeling van ZZ PartyTotaal.",
      "Wij leveren, koelen en halen op — u hoeft alleen nog maar te tappen.",
    ],
    specs: [
      { label: "Inhoud", value: "50 liter (± 200 consumpties)" },
      { label: "Statiegeld", value: "Inbegrepen bij aankoop fust" },
      { label: "Aanbevolen", value: "Combineer met tapinstallatie" },
    ],
    stock: 60,
  },
  {
    slug: "tapinstallatie-rvs",
    name: "Tapinstallatie RVS (2-weg)",
    category: "Buffetten en Barren",
    categorySlug: "buffetten-en-barren",
    priceExcl: 42.5,
    priceIncl: 51.43,
    unit: "per dag",
    img: IMG.biertap,
    gallery: [IMG.biertap],
    rating: 4.7,
    reviews: 44,
    short: "Professionele RVS taps met dubbele kop — perfect getapt bier, altijd.",
    description: [
      "Onze RVS tapinstallatie zorgt voor een perfecte, romige schuimkraag bij elk glas. Geschikt voor twee verschillende biersoorten tegelijk.",
      "Inclusief koolzuur, drukregelaars en heldere instructies voor eigen gebruik — of laat onze tapper het overnemen.",
    ],
    specs: [
      { label: "Aantal tapkoppen", value: "2" },
      { label: "Materiaal", value: "RVS" },
      { label: "Inclusief", value: "Koppeling & drukregelaar" },
      { label: "Koolzuur", value: "Los bij te bestellen" },
    ],
    stock: 25,
  },
  {
    slug: "loungebank-wit-rotan",
    name: "Loungebank wit rotan (hoekset)",
    category: "Meubilair en Inrichting",
    categorySlug: "meubilair-en-inrichting",
    priceExcl: 95,
    priceIncl: 114.95,
    unit: "per set / per dag",
    img: IMG.loungebank,
    gallery: [IMG.loungebank, IMG.loungeLifestyle],
    badge: "Nieuw",
    rating: 4.8,
    reviews: 22,
    short: "Stijlvolle rotan loungeset voor een relaxte hoek op uw event.",
    description: [
      "Creëer een chille loungehoek met deze witte rotan hoekbank, inclusief comfortabele grijze kussens. Ideaal voor terrassen, tuinfeesten en VIP-area's.",
      "Weerbestendig materiaal, eenvoudig te combineren met onze salontafels en sfeerverlichting.",
    ],
    specs: [
      { label: "Materiaal", value: "Kunststof rotan, aluminium frame" },
      { label: "Kussens", value: "Antraciet, waterafstotend" },
      { label: "Capaciteit", value: "4-5 personen" },
      { label: "Binnen/buiten", value: "Beide geschikt" },
    ],
    stock: 18,
  },
  {
    slug: "partytent-6x12",
    name: "Partytent 6 x 12 meter (wit)",
    category: "Tenten en Parasols",
    categorySlug: "tenten-en-parasols",
    priceExcl: 425,
    priceIncl: 514.25,
    unit: "per dag, incl. opbouw",
    img: IMG.dinertafel,
    gallery: [IMG.tentLifestyle],
    rating: 4.9,
    reviews: 37,
    short: "Stevige polyester feesttent voor 70+ gasten, inclusief opbouwservice.",
    description: [
      "Onze 6x12 meter partytent biedt onderdak aan zo'n 70 tot 90 gasten en wordt volledig door ons team opgebouwd en verankerd — weersbestendig en representatief.",
      "Naar wens uit te breiden met zij-wanden, vloeren, verlichting en verwarming.",
    ],
    specs: [
      { label: "Afmeting", value: "6 x 12 meter (72 m²)" },
      { label: "Capaciteit", value: "70-90 personen" },
      { label: "Materiaal dak", value: "PVC, brandvertragend" },
      { label: "Opbouw", value: "Inclusief door ZZ-team" },
    ],
    stock: 6,
  },
  {
    slug: "bbq-garnituren-b",
    name: "BBQ garnituren B (voor 10 pers.)",
    category: "Evenement en Benodigdheden",
    categorySlug: "evenement-en-benodigdheden",
    priceExcl: 12.75,
    priceIncl: 13.9,
    unit: "per schaal (10 pers.)",
    img: IMG.dinertafel,
    gallery: [IMG.bbqLifestyle],
    rating: 4.6,
    reviews: 15,
    short: "Verse salades en sausjes — het perfecte bijgerecht bij uw BBQ.",
    description: [
      "Een uitgebreide schaal met verse salades, stokbrood en huisgemaakte sauzen — precies genoeg voor 10 personen. Vers bereid en gekoeld geleverd op de dag zelf.",
      "Te combineren met onze BBQ-verhuur en vlees- en visarrangementen.",
    ],
    specs: [
      { label: "Aantal personen", value: "10" },
      { label: "Bevat", value: "3 salades, stokbrood, 2 sauzen" },
      { label: "Levering", value: "Gekoeld, dezelfde dag" },
    ],
    stock: 999,
  },
  {
    slug: "kaas-worst-schaal-60",
    name: "Luxe kaas/worst schaal (± 60 stuks)",
    category: "Evenement en Benodigdheden",
    categorySlug: "evenement-en-benodigdheden",
    priceExcl: 44.45,
    priceIncl: 48.45,
    unit: "per schaal (± 60 st.)",
    img: IMG.glazenkrat,
    gallery: [IMG.bbqLifestyle],
    rating: 4.8,
    reviews: 26,
    short: "Feestelijke borrelplank met kaas en worst — altijd raak bij een borrel.",
    description: [
      "Een royale schaal met een selectie van kazen en worstsoorten, netjes gestoken en klaar om te serveren. Perfect voor recepties, borrels en netwerkevents.",
    ],
    specs: [
      { label: "Aantal stuks", value: "± 60" },
      { label: "Bevat", value: "Kaas, worst, garnituur" },
      { label: "Allergenen", value: "Melk — op aanvraag lijst beschikbaar" },
    ],
    stock: 999,
  },
  {
    slug: "podiumrok-wit-410",
    name: "Podiumrok 40 cm, 4,10 meter, wit",
    category: "Evenement en Benodigdheden",
    categorySlug: "evenement-en-benodigdheden",
    priceExcl: 11.5,
    priceIncl: 13.92,
    unit: "per stuk / per dag",
    img: IMG.dinertafel,
    gallery: [IMG.tentLifestyle],
    rating: 4.4,
    reviews: 9,
    short: "Nette afwerking rondom uw podiumdelen — strak en representatief.",
    description: [
      "Deze podiumrok verbergt de constructie van uw podiumdelen en zorgt voor een strakke, professionele uitstraling bij elk optreden of ceremonie.",
    ],
    specs: [
      { label: "Hoogte", value: "40 cm" },
      { label: "Lengte", value: "4,10 meter" },
      { label: "Kleur", value: "Wit" },
      { label: "Bevestiging", value: "Klittenband" },
    ],
    stock: 40,
  },
];

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getRelated(product: Product, count = 4) {
  const sameCat = PRODUCTS.filter(
    (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
  );
  const rest = PRODUCTS.filter(
    (p) => p.categorySlug !== product.categorySlug && p.slug !== product.slug
  );
  return [...sameCat, ...rest].slice(0, count);
}

export function formatEUR(n: number) {
  return n.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
