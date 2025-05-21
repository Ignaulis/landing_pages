import Hero from "./components/hero/hero";
import Info from "./components/information/info";
import Navigation from "./components/navigation/navigation";

export default function Home() {

  return (
    <>
      <Navigation />

      <Hero />
      <Info />
    </>
  );
}