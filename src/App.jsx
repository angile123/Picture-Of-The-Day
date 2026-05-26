import { useEffect, useState } from "react";
import Grid from "./components/Grid/Grid.jsx";
import Image from "./components/Image/Image.jsx";
import Info from "./components/Info/Info.jsx";
import Form from "./components/Form/Form.jsx";
import Card from "./components/Card/Card.jsx";
import { handleInitialData } from "./utils.js";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    handleInitialData(setData, setLoading, setError);
  }, []);

  return (
    <Grid classes={["mainGridContainer"]}>
      <Image loading={loading} data={data} error={error} />
      <Card>
        <Info data={data} loading={loading} error={error} />
        <Form setData={setData} setLoading={setLoading} setError={setError} />
      </Card>
    </Grid>
  );
}

export default App;
