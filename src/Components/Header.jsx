import styles from "./Header.module.css";

function Header() {
  return (
    <header styles={styles.header}>
      <h1>{`{ JSON } Schema Generator`}</h1>
    </header>
  );
}

export default Header;
