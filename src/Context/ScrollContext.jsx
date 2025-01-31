import { createContext, useRef } from "react";

export const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollContext.Provider
      value={{ scrollToSection, aboutRef, skillsRef, projectRef, contactRef }}
    >
      {children}
    </ScrollContext.Provider>
  );
};
