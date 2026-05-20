import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles.errorContainer}>
      <p>There has been an error fetching image</p>
    </div>
  );
}
