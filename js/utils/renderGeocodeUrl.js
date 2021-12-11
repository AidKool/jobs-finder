// function to render URL path based on any **UK** city given as an input. This is to restrict calls from retrieving cities outside of the UK that share the same name
export const renderGeocodeUrl = (city) => {
  const apiKey =
    'YTA3YzhlY2FlY2ZiNGVmNWI3OTY1YjY4NWI4YWQ5NTU6ZDg3MTkyMDItNTZmMS00NGI2LThmZjAtZjNlNTIzMmJmM2I0';
  const url = `https://api.myptv.com/geocoding/v1/locations/by-text?searchText=${city},UnitedKingdom&apiKey=${apiKey}`;
  return url;
};
