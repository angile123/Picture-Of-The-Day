import Error from "../Error/Error.jsx";
import Loading from "../Loading/Loading.jsx";
import Picture from "../Picture/Picture.jsx";
import styles from "./Image.module.css";

export default function Image({ data, loading, error }) {
  return (
    <div className={styles.imgMainContainer}>
      {error && <Error />}
      {loading && <Loading />}
      {data && <Picture data={data} />}
    </div>
  );
}
