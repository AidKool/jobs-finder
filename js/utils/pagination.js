// the function below does not work

/*
1. it was just moved from a different context
where it had access to all parameters
2. the result of fetchJobs() must be stored in
in a variable
*/

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
    fetchJobs();
  }
}
