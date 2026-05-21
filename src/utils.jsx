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
