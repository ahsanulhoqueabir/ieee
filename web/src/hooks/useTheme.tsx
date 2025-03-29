import { useEffect, useState } from "react";

const useTheme = () => {
  const [transition, setTransition] = useState(false);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("cstheme");
      setTheme(savedTheme || "");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cstheme", theme || "");
      const htmlElement = document.querySelector("html");
      if (htmlElement) {
        htmlElement.setAttribute("class", theme || "");
      }
    }
  }, [theme]);

  return {
    theme,
    setTheme,
    transition,
    setTransition,
  };
};

export default useTheme;
