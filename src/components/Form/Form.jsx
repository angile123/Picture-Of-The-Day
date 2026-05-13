import styles from "./Form.module.css";
import calenderImg from "../../calender.svg";
// import { useEffect } from "react";

export default function Form({ setData, setLoading, setError }) {
  async function handleForm(e) {
    e.preventDefault();
    setLoading(true);
    let date = e.target[0].value;
    const URL = `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=${date}`;
    try {
      const response = await fetch(URL);
      if (!response.ok) throw new Error("HTTP error");
      const data = await response.json();
      setData(data);
      setError(null);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   async function fetchData(){}
  // }, [])

  return (
    <form className={styles.formContainer} onSubmit={handleForm}>
      <p className={styles.formTitleP}>Select Date</p>

      <div className={styles.spacingContainer}>
        <div className={styles.pickDateContainer}>
          <input type="text" placeholder="YY-MM-DD" className={styles.input} />

          <img src={calenderImg} alt="calender" className={styles.img} />
        </div>

        <button className={styles.btnSubmit}>Submit</button>
      </div>
    </form>
  );
}
