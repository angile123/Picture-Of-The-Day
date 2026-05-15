import styles from "./Card.module.css";
export default function Card({ children }) {
  return (
    <div className={styles.rightDisplay}>
      <div className={styles.rightWrapper}>{children}</div>
    </div>
  );
}
