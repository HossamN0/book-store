import Faq from "@/components/faq";
import Filter from "@/components/filter";
import Hero from "@/components/hero";
import MobileView from "@/components/mobile-view";

export default function Home() {
  return (
    <>
      <Hero/>
      <MobileView/>
      <Filter/>
      <Faq/>
    </>
  );
}
