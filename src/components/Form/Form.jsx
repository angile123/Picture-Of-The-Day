import styles from "./Form.module.css";
import { tryCatch } from "../../utils.jsx";
export default function Form({ setData, setLoading, setError }) {
  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    let date = e.target[0].value;
    const URL = `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=${date}`;
    const { data, err } = await tryCatch(URL);
    setLoading(false);
    if (err) {
      setError(err);
      setData(null);
    } else if (data) {
      setData(data);
      setError(null);
    }
  }

  return (
    <form className={styles.formContainer} onSubmit={handleForm}>
      <p className={styles.formTitleP}>Select Date</p>

      <div className={styles.spacingContainer}>
        <input type="text" placeholder="YY-MM-DD" className={styles.input} />
        <button className={styles.btnSubmit}>Submit</button>
      </div>
    </form>
  );
}
