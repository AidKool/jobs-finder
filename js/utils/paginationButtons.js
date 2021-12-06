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
  <a class="pagination-previous" data-page="prev">Prev</a>
  <ul class="pagination-list">
  ${pages
    .map((item) => {
      return `
      <li>
        <a class="pagination-link" data-page="${item}">${item}</a>
      </li> 
      `;
    })
    .join('')}
    </ul>  
    <a class="pagination-next" data-page="next">Next</a>
`;
  showActivePage(currentPage);
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
