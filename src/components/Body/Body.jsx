import styles from "./Body.module.css";
export default function Body({ picture, loading, error }) {
  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {picture && (
        <>
          <div className={styles.imgContainer}>
            <img src={picture.hdurl} alt="pic of the day" className={styles.img} />
          </div>
        </>
      )}
    </>
  );
}
