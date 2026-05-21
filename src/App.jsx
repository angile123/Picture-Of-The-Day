import { useEffect, useState } from "react";
import Grid from "./components/Grid/Grid.jsx";
import Image from "./components/Image/Image.jsx";
import Info from "./components/Info/Info.jsx";
import Form from "./components/Form/Form.jsx";
import Card from "./components/Card/Card.jsx";
import { tryCatch } from "./utils.jsx";

const URL = `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=2002-02-02`;

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
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
    fetchData();
  }, []);

  return (
    <Grid>
      <Image loading={loading} data={data} error={error} />
      <Card>
        <Info data={data} loading={loading} error={error} />
        <Form setData={setData} setLoading={setLoading} setError={setError} />
      </Card>
    </Grid>
  );
}

export default App;
