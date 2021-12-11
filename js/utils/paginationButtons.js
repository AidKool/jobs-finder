const paginationContainer = document.querySelector('.pagination');

function calculatePages(totalPages, currentPage) {
  let pages = [];

  for (let i = currentPage - 2; i < totalPages && pages.length < 5; i++) {
    if (i > 0) {
      pages.push(i);
    }
  }

  if (pages[0] !== 1) {
    pages.unshift(1);
  }

  if (pages[pages.length - 1] !== totalPages) {
    pages.push(totalPages);
  }
  return pages;
}

export function initialisePaginationButtons({ totalPages }) {
  renderPaginationButtons(totalPages, 1);
  const btnPrev = document.querySelector('.pagination-previous');
  btnPrev.classList.add('is-hidden');
}

export function renderPaginationButtons(totalPages, currentPage) {
  const pages = calculatePages(totalPages, currentPage);

  paginationContainer.innerHTML = `
  <ul class="pagination-list">
    <li>
      <a class="pagination-previous" data-page="prev">Prev</a>
    </li>
  ${pages
    .map((item, index, array) => {
      let newItem = `<li>
                       <a class="pagination-link" data-page="${item}">${item}</a>
                     </li>`;
      if (array[index + 1] && item + 1 !== array[index + 1]) {
        newItem += `<li>
                      <span class="pagination-ellipsis">&hellip;</span>
                    </li>`;
      }
      return newItem;
    })
    .join('')}
      <li>  
        <a class="pagination-next" data-page="next">Next</a>
      </li>  
    </ul>  
`;
  showActivePage(currentPage);
  if (isLast(totalPages, currentPage)) {
    removeNextfromLastPage();
  }
}

function showActivePage(currentPage) {
  const paginationLinks = document.querySelectorAll('.pagination li > a');
  paginationLinks.forEach((button) => {
    button.classList.remove('is-current');
    if (Number(button.dataset.page) === currentPage) {
      button.classList.add('is-current');
    }
  });
}

function removeNextfromLastPage() {
  const btnNext = document.querySelector('.pagination-next');
  btnNext.classList.add('is-hidden');
}

function isLast(totalPages, currentPage) {
  return totalPages === currentPage;
}
