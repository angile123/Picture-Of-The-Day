import styles from "./InfoLoading.module.css";
export default function InfoLoading() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingTitle}></div>
      <div className={styles.loadingPContainer}>
        <div className={styles.loadingP}></div>
        <div className={styles.loadingP}></div>
        <div className={styles.loadingP}></div>
        <div className={styles.lastLoadingP}></div>
      </div>
    </div>
  );
}
