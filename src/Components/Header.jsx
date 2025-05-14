import { useDarkMode } from "../Contexts/DarkModeContext";
import styles from "./Header.module.css";
import { Sun, Moon } from "lucide-react";
function Header() {
  const { isDark, setIsDark } = useDarkMode();

  return (
    <header styles={styles.header}>
      <h1>{`{ JSON } Schema Generator`}</h1>
      <button onClick={() => setIsDark((mode) => !mode)}>
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
    </header>
  );
}

export default Header;
