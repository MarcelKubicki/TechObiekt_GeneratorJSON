import styles from "./InOutContainer.module.css";

function InOutContainer({ children }) {
  return <div className={styles.mainContainer}>{children}</div>;
}

export default InOutContainer;
