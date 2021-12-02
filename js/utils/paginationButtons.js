const pagContainer = document.querySelector('.pagination');

function calculatePages(totalPages, start) {
  let pages = [];

  pages.push(1);

  for (let i = start; i < totalPages && pages.length < 4; i++) {
    pages.push(i);
  }

  if (pages[pages.length - 1] !== totalPages) {
    pages.push(totalPages);
  }
  return pages;
}

export function initialisePaginationButtons({ totalPages }) {
  renderPaginationButtons(totalPages);
  const btnPrev = document.querySelector('.pagination-previous');
  btnPrev.classList.add('is-hidden');
}

export function renderPaginationButtons(totalPages, start = 2) {
  const pages = calculatePages(totalPages, start);

  pagContainer.innerHTML = `
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
}
