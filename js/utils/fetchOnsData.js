// fetches ONS data from the ONS API by providing url as input and returns data
export async function fetchOnsData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
