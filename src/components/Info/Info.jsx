import InfoLoading from "./InfoLoading.jsx";
import styles from "./Info.module.css";
import InfoError from "./InfoError.jsx";

export default function Info({ data, loading, error }) {
  let imgSrc = data ? data.url : "";

  if (loading) {
    return <InfoLoading />;
  }
  if (error) {
    return <InfoError />;
  }
  if (data) {
    return (
      <div className={styles.infoContainer}>
        <p
          style={{ backgroundImage: `url(${imgSrc})`, backgroundClip: "text" }}
          className={styles.title}
        >
          {data.title}
        </p>
        <p className={styles.desc}>{data.explanation}</p>
      </div>
    );
  }
}
