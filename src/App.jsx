import { useState } from "react";
import Grid from "./components/Grid/Grid.jsx";
import Image from "./components/Image/Image.jsx";
import Info from "./components/Info/Info.jsx";
import Form from "./components/Form/Form.jsx";
import Card from "./components/Card/Card.jsx";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

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
