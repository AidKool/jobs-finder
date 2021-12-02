export function paginate(event) {
  if (event.target.tagName === 'A') {
    let page = event.target.dataset.page;

    if (page === 'next') {
      currentPage++;
    } else if (page === 'prev') {
      currentPage--;
    } else {
      currentPage = page;
    }
    resultsToSkip = (currentPage - 1) * resultsToTake;
    console.log(currentPage);
    fetchJobs();
  }
}
