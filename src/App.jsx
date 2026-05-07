import Form from "./components/Form/Form.jsx";
import Body from "./components/Body/Body.jsx";
import { useState } from "react";

function App() {
  const [picture, setPicture] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log("re-rendered!");

  return (
    <>
      <Form setPicture={setPicture} setLoading={setLoading} setError={setError} />
      <Body picture={picture} loading={loading} error={error} />
    </>
  );
}

export default App;
