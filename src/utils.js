export async function tryCatch(URL) {
  try {
    let response = await fetch(URL);

    if (!response.ok) throw new Error("HTTP error");
    let json = await response.json();
    return { data: json, err: null };
  } catch (err) {
    return { data: null, err };
  }
}
export async function handleFormSubmit(e, { setData, setLoading, setError }) {
  e.preventDefault();

  setLoading(true);
  const date = e.target[0].value;
  const URL = `https://api.nasa.gov/planetary/apod?api_key=Ij0ZDm6nUW5dhYbMLA6qVoH2hH5zFvDgpyXytaSq&date=${date}`;
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
