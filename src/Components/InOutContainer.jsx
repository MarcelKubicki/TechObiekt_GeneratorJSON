import styles from "./InOutContainer.module.css";

function InOutContainer({ children }) {
  return <main className={styles.mainContainer}>{children}</main>;
}

export default InOutContainer;
