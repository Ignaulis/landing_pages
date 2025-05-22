import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const refs = {
    Features: useRef(),
    Testimonials: useRef(),
    Help: useRef(),
    Pricing: useRef(),
  };

  const handleScroll = (id) => {
    refs[id]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider value={{ refs, handleScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};
