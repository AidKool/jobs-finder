// This renders the URL for the fetch call upon inital submit. This takes keywords, distance, salary range info, location and checkboxes (which are sourced through filters) and renders the URL needed for the call.
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
