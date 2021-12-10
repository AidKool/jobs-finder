export const renderUrl = (
  keywords,
  distance,
  minimumSalary,
  maximumSalary,
  locationName,
  checkedUrl
) => {
  const url =
    `https://www.reed.co.uk/api/1.0/search?keywords=${keywords
      .split(' ')
      .join(
        ','
      )}&distanceFromLocation=${distance}&minimumSalary=${minimumSalary}&maximumSalary=${maximumSalary}&locationName=${locationName}&resultsToTake=5` +
    checkedUrl;
  return url;
};
