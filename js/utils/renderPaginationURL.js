export function renderPaginationURL(url, currentPage) {
  const resultsToSkip = (currentPage - 1) * 5;
  const paginationURL = `${url}&resultsToSkip=${resultsToSkip}`;
  console.log(paginationURL);
  return paginationURL;
}