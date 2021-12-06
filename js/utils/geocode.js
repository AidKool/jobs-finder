export async function getCoordinates(city) {
  const url = `https://geocode.xyz/${city}?json=1`;
  const response = await fetch(url);
  const data = await response.json();
  return {
    lon: data.longt,
    lat: data.latt,
  };
}
