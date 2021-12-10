export { VALUES_PER_PAGE } from './constants.js';

export function renderPaginationURL(url, currentPage) {
  const resultsToSkip = (currentPage - 1) * VALUES_PER_PAGE;
  const paginationURL = `${url}&resultsToSkip=${resultsToSkip}`;
  return paginationURL;
}
