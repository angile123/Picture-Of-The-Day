import Form from "./components/Form/Form.jsx";
import Body from "./components/Body/Body.jsx";
import { useEffect, useState } from "react";

function App() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log("re-render");

  useEffect(() => {
    console.log("effect running");
    const URL = `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=2000-04-04`;
    async function fetchData() {
      try {
        const response = await fetch(URL);
        if (!response.ok) setError("Something went wrong");
        const result = await response.json();
        setPicture(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []); // runs on initial mount only.

  return (
    <>
      <Form setPicture={setPicture} setLoading={setLoading} setError={setError} />
      <Body picture={picture} loading={loading} error={error} />
    </>
  );
}

export default App;
