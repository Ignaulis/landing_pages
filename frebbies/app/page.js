'use client'

import Hero from "./components/hero/hero";
import Info from "./components/information/info";
import Navigation from "./components/navigation/navigation";
import Plan from "./components/plan/plan";
import Map from "./components/map/map";
import Testimonials from "./components/testimonials/testimonials";

export default function Home() {

  return (
    <>
      <Navigation />

      <Hero />
      <Info />

      <Plan />
      <Map />

      <Testimonials />
    </>
  );
}