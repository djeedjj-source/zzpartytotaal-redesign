import Assortment from "../components/Assortment";
import BigCTA from "../components/BigCTA";
import Catering from "../components/Catering";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Process from "../components/Process";
import Region from "../components/Region";
import Services from "../components/Services";
import Ticker from "../components/Ticker";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <Intro />
      <Services />
      <Assortment />
      <Catering />
      <Process />
      <Region />
      <BigCTA />
    </>
  );
}
