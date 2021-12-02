import { filters } from './utils/filters.js';
import { fetchJobs } from './utils/jobsSearch.js';
import { renderNumberJobs, renderJobsSearchData } from './utils/renderJobsSearchData.js';
import { initialisePaginationButtons, renderPaginationButtons } from './utils/paginationButtons.js';
import { paginate } from './utils/pagination.js';

let { keywords, locationName, resultsToTake, resultsToSkip } = filters;

const url = `https://www.reed.co.uk/api/1.0/search?keywords=${keywords}&locationName=${locationName}&resultsToTake=${resultsToTake}&resultsToSkip=${resultsToSkip}`;

// Define DOM elements
const keywordsElement = document.querySelector('input.what');
const locationElement = document.querySelector('input.where');
const form = document.querySelector('form');
const distanceElement = document.querySelector('select.distance');
const salaryFromElement = document.querySelector('select.starting-salary');
const salaryToElement = document.querySelector('select.ending-salary');

// Select all checkboxes with the name 'settings' using querySelectorAll.
const checkboxes = document.querySelectorAll('input[type=checkbox]');

let checkedCriteria = [];

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    checkedCriteria = [...checkboxes]
      .filter((i) => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map((i) => i.attributes[1].nodeValue); // Use Array.map to extract only the checkbox names from the array of objects.

    console.log(checkedCriteria);
  });
});

const submitFunction = function (event) {
  event.preventDefault();
  let locationName = locationElement.value;
  let keywords = keywordsElement.value;
  let distance = distanceElement.value;
  let minimumSalary = salaryFromElement.value;
  let maximumSalary = salaryToElement.value;
  let checkedObj = Object.assign(...checkedCriteria.map((k) => ({ [k]: true })));
  console.log(locationName);
  console.log(keywords);
  console.log(distance);
  console.log(minimumSalary);
  console.log(maximumSalary);
  console.log(checkedObj);
};

form.addEventListener('submit', submitFunction);

const data = await fetchJobs(url, filters);
renderNumberJobs(data);
renderJobsSearchData(data);
initialisePaginationButtons(data);
