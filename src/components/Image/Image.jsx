import styles from "./Image.module.css";

export default function Image({ data, loading, error }) {
  return (
    <div className={styles.imgMainContainer}>
      {error && (
        <div className={styles.errorContainer}>
          <p className={styles.errorPMessage}>There has been an error fetching image</p>
        </div>
      )}
      {loading && <div className={styles.loadingContainer}></div>}
      {data && (
        <div className={styles.imgContainer}>
          <img src={data.url} alt="space picture of the day" className={styles.img} />
        </div>
      )}
    </div>
  );
}
