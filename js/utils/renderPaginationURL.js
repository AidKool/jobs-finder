import { VALUES_PER_PAGE } from './constants.js';

// Updates the stored url value with the jump to page by specifying how many pages are needed to skip
export function renderPaginationURL(url, currentPage) {
  // resultsToSkip from first page based on the number of results per page. There are no results to skip on the first page
  const resultsToSkip = (currentPage - 1) * VALUES_PER_PAGE;
  const paginationURL = `${url}&resultsToSkip=${resultsToSkip}`;
  return paginationURL;
}
