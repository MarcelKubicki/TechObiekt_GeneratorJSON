import { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

export default function DarkModeProvider({ children }) {
  const [isDark, setIsDark] = useState(
    () => localStorage.getItem("isDark") === "dark"
  );

  useEffect(
    function () {
      const root = document.documentElement;

      if (isDark) {
        root.classList.add("dark");
        localStorage.setItem("isDark", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("isDark", "light");
      }
    },
    [isDark]
  );

  return (
    <DarkModeContext.Provider value={{ isDark, setIsDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  return useContext(DarkModeContext);
}
