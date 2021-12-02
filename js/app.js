import "./utils/jobsSearch.js";

// import { renderJobsSearchData } from './utils/renderJobsSearchData.js';

// renderJobsSearchData();

import { renderUrl } from "./utils/renderUrl.js";

import "./utils/renderJobsSearchData.js";

// Define DOM elements
const keywordsElement = document.querySelector("input.what");
const locationElement = document.querySelector("input.where");
const form = document.querySelector("form");
const distanceElement = document.querySelector("select.distance");
const salaryFromElement = document.querySelector("select.starting-salary");
const salaryToElement = document.querySelector("select.ending-salary");

// Select all checkboxes with the name 'settings' using querySelectorAll.
const checkboxes = document.querySelectorAll("input[type=checkbox]");

let checkedCriteria = [];

// Use Array.forEach to add an event listener to each checkbox.
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener("change", function () {
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
  // console.log(checkedCriteria);
  let checkedUrl = checkedCriteria
    .map((k) => {
      return `&${k}=true`;
    })
    .join("");
  // Below function will render the url (you can now see in console log too - To be removed later after review)
  renderUrl(
    keywords,
    distance,
    minimumSalary,
    maximumSalary,
    locationName,
    checkedUrl
  );
};

form.addEventListener("submit", submitFunction);
