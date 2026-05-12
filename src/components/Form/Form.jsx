import styles from "./Form.module.css";

export default function Form({ setPicture, setLoading, setError }) {
  async function handleSubmitForm(e) {
    e.preventDefault();

    setLoading(true);
    const date = e.target[0].value;

    try {
      const response = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=${date}`,
      );
      if (!response.ok) throw new Error("Something went wrong");
      const result = await response.json();
      setPicture(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    // Form will be out of the flow.
    <form onSubmit={handleSubmitForm} className={styles.container}>
      <input type="date" />
      <button>Submit</button>
    </form>
  );
}
