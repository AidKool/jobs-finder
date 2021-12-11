// fetches ONS data from the ONS API by providing url as input and returns data
export async function fetchOnsData(URL) {
  try {
    const response = await fetch(URL);
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
