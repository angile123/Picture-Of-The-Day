import styles from "./InfoError.module.css";

export default function InfoError() {
  return (
    <div className={styles.errorContainer}>
      <p>There has been an error fetching the data</p>
    </div>
  );
}
