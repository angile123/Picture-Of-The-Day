import { useState } from "react";
import Grid from "./components/Grid/Grid.jsx";
import Image from "./components/Image/Image.jsx";
import Info from "./components/Info/Info.jsx";
import Form from "./components/Form/Form.jsx";
import styles from "./App.module.css";
function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <Grid>
      <div>
        <Image loading={loading} data={data} error={error} />
      </div>

      <div className={styles.rightDisplay}>
        <div className={styles.rightWrapper}>
          <Info data={data} loading={loading} error={error} />
          <Form setData={setData} setLoading={setLoading} setError={setError} />
        </div>
      </div>
    </Grid>
  );
}

export default App;
