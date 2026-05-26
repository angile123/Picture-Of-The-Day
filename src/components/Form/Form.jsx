import styles from "./Form.module.css";
import { handleFormSubmit } from "../../utils.js";
import Grid from "../Grid/Grid.jsx";
export default function Form(props) {
  return (
    <Grid classes={[styles.formContainer]}>
      <form onSubmit={(e) => handleFormSubmit(e, props)}>
        <p className={styles.formTitleP}>Select Date</p>

        <Grid classes={[styles.spacingContainer]}>
          <input type="text" placeholder="YY-MM-DD" className={styles.input} />
          <button className={styles.btnSubmit}>Submit</button>
        </Grid>
      </form>
    </Grid>
  );
}
