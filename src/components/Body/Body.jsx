import { useState } from "react";
import Form from "../Form/Form";
import Image from "../Image/Image.jsx";
import Info from "../Info/Info.jsx";
import styles from "./Body.module.css";

export default function Body() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <div className={styles.container}>
      <div className={styles.leftDisplay}>
        <Image loading={loading} data={data} error={error} />
      </div>

      <div className={styles.rightWrapper}>
        <div className={styles.rightContainer}>
          <Info data={data} loading={loading} error={error} />
          <Form setData={setData} setLoading={setLoading} setError={setError} />
        </div>
      </div>
    </div>
  );
}
