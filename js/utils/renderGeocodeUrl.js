export const renderGeocodeUrl = (city) => {
  const url = `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${city},UnitedKingdom&apiKey=YTA3YzhlY2FlY2ZiNGVmNWI3OTY1YjY4NWI4YWQ5NTU6ZDg3MTkyMDItNTZmMS00NGI2LThmZjAtZjNlNTIzMmJmM2I0`;
  return url;
};
