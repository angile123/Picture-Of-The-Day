import styles from "./Picture.module.css";

export default function Picture({ data }) {
  return (
    <div className={styles.imgContainer}>
      <img src={data.url} alt="space picture of the day" className={styles.img} />
    </div>
  );
}
