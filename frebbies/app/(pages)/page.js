'use client'

import Hero from "../components/hero/hero";
import Info from "../components/information/info";
import Navigation from "../components/navigation/navigation";
import Plan from "../components/plan/plan";
import Map from "../components/map/map";
import Testimonials from "../components/testimonials/testimonials";
import Footer from "../components/footer/footer";
import Wrapper from "../utils/wrapper";
import { ScrollProvider } from "../context/scrollContext";
import { motion } from "framer-motion";

export default function Home() {

  return (
    <ScrollProvider>
      <Wrapper>
        <Navigation />
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >

          <Hero />
          <Info />
        </motion.div>

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