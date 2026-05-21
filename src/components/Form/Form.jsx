import styles from "./Form.module.css";
import { handleFormSubmit } from "../../utils.js";
export default function Form(props) {
  return (
    <form className={styles.formContainer} onSubmit={(e) => handleFormSubmit(e, props)}>
      <p className={styles.formTitleP}>Select Date</p>

      <div className={styles.spacingContainer}>
        <input type="text" placeholder="YY-MM-DD" className={styles.input} />
        <button className={styles.btnSubmit}>Submit</button>
      </div>
    </form>
  );
}
