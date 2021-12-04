export async function fetchOnsData(URL) {
  const response = await fetch(URL);
  console.log(response);
  const data = await response.json();
  console.log(data);
  return data;
}
