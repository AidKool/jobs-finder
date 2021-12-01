import "./utils/jobsSearch.js";

const keywordsElement = document.querySelector("input.what"); // Define DOM elements
const locationElement = document.querySelector("input.where");
const submitElement = document.querySelector("button.submit");
const distanceElement = document.querySelector("select.distance");
const salaryFromElement = document.querySelector("select.starting-salary");
const salaryToElement = document.querySelector("select.ending-salary");

console.log(keywordsElement);
console.log(locationElement);
console.log(submitElement);
console.log(distanceElement);
console.log(salaryFromElement);
console.log(salaryToElement);

const submitFunction = function (event) {
  event.preventDefault();
  let locationName = locationElement.value;
  let keywords = keywordsElement.value;
  let distance = distanceElement.value;
  let salaryFrom = salaryFromElement.value;
  let salaryTo = salaryToElement.value;
  console.log(locationName);
  console.log(keywords);
  console.log(distance);
  console.log(salaryFrom);
  console.log(salaryTo);
};

submitElement.addEventListener("click", submitFunction);
