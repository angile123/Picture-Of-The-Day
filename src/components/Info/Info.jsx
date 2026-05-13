import styles from "./Info.module.css";
export default function Info({ data, loading, error }) {
  return (
    <div>
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loadingTitle}></div>
          <div className={styles.loadingPContainer}>
            <div className={styles.loadingP}></div>
            <div className={styles.loadingP}></div>
            <div className={styles.loadingP}></div>
            <div className={styles.lastLoadingP}></div>
          </div>
        </div>
      )}
      {!error && !loading && data && (
        <div className={styles.infoContainer}>
          <p className={styles.title}>{data.title}</p>
          <p className={styles.desc}>{data.explanation}</p>
        </div>
      )}
      {error && (
        <div className={styles.errorContainer}>
          <p>There has been an error fetching the data</p>
        </div>
      )}
    </div>
  );
}
