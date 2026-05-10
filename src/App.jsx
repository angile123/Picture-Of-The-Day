import Form from "./components/Form/Form.jsx";
import Body from "./components/Body/Body.jsx";
import { useEffect, useState } from "react";
import styles from "./App.module.css";
function App() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log("re-render");

  useEffect(() => {
    console.log("effect running");
    const URL = `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=2000-04-04`;
    async function fetchData() {
      setLoading(true);

      try {
        let response = await fetch(URL);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        let json = await response.json();
        setPicture(json);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // runs on initial mount only.

  return (
    <div className={styles.container}>
      <Form setPicture={setPicture} setLoading={setLoading} setError={setError} />
      <Body picture={picture} loading={loading} error={error} />
    </div>
  );
}

export default App;
