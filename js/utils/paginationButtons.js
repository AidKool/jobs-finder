import { totalPages } from './jobsSearch.js';

// let totalPages = 5454;

const pagContainer = document.querySelector('.pagination');

function calculatePages() {
  let pages = [];

  for (let i = 1; i < totalPages && pages.length < 4; i++) {
    pages.push(i);
  }

  if (pages[pages.length - 1] !== totalPages) {
    pages.push(totalPages);
  }
  return pages;
}

export function initialisePaginationButtons() {
  const pages = calculatePages();

  pagContainer.innerHTML = `
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
    <a class="pagination-next">Next</a>
`;
}
