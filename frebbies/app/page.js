'use client'

import Hero from "./components/hero/hero";
import Info from "./components/information/info";
import Navigation from "./components/navigation/navigation";
import Plan from "./components/plan/plan";
import Map from "./components/map/map";
import Testimonials from "./components/testimonials/testimonials";
import Footer from "./components/footer/footer";
import Wrapper from "./utils/wrapper";
import { ScrollProvider } from "./context/scrollContext";

export default function Home() {

  return (
    <ScrollProvider>
      <Wrapper>

        <Navigation />

        <Hero />
        <Info />
      </Wrapper>

      <Wrapper>

        <Plan />
        <Map />

        <Testimonials />
      </Wrapper>



      <Footer />
    </ScrollProvider>
  );
}