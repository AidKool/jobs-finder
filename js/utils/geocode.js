// fetches geocode location data from the MYPTV API by providing url as input
export async function getCoordinates(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    // destructure data object
    const { locations } = data;
    return locations[0].referencePosition;
  } catch (error) {
    console.log(error);
  }
}
