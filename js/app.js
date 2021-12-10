import { fetchJobs } from './utils/jobsSearch.js';
import {
  renderNumberJobs,
  renderJobsSearchData,
} from './utils/renderJobsSearchData.js';
import { initialisePaginationButtons } from './utils/paginationButtons.js';
import './utils/pagination.js';
import { renderUrl } from './utils/renderUrl.js';
import { map, tileLayer } from './utils/leaflet.js';
import './utils/renderJobsSearchData.js';
import { getAndDisplayJobsData } from './utils/renderJobsSearchData.js';
import { getCoordinates } from './utils/geocode.js';
import './utils/getIndividualJobData.js';
import { renderOnsUrl } from './utils/renderOnsUrl.js';
import { fetchOnsData } from './utils/fetchOnsData.js';
import { renderGeocodeUrl } from './utils/renderGeocodeUrl.js';
import './utils/toggleForm.js';
import { formContainer } from './utils/toggleForm.js';
import { setHeight } from './utils/setHeight.js';
import { getOns, cities } from './utils/getOns.js';
import { colourOns } from './utils/colourOns.js';
import './utils/styles.js';

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
      .map((i) => i.attributes['name']); // Use Array.map to extract only the checkbox names from the array of objects.
  });
});

form.addEventListener('submit', async function (event) {
  try {
    event.preventDefault();
    let locationName = locationElement.value;
    let keywords = keywordsElement.value;
    let distance = distanceElement.value;
    let minimumSalary = salaryFromElement.value;
    let maximumSalary = salaryToElement.value;
    let checkedUrl = checkedCriteria
      .map((k) => {
        return `&${k}=true`;
      })
      .join('');
    // Below function will render the url
    let url = renderUrl(
      keywords,
      distance,
      minimumSalary,
      maximumSalary,
      locationName,
      checkedUrl
    );
    // save url to local storage
    localStorage.setItem('url', url);
    localStorage.setItem('currentPage', 1);
    // Gets and displays job data
    const jobsData = await getAndDisplayJobsData(url);
    initialisePaginationButtons(jobsData);
    setHeight(formContainer, 0);
  } catch (error) {
    console.log(error);
  }
});

window.addEventListener('DOMContentLoaded', async () => {
  let factors = ['happiness', 'worthwhile', 'life-satisfaction', 'anxiety'];

  const storedOns = await Promise.all([
    getOns(factors[0]),
    getOns(factors[1]),
    getOns(factors[2]),
    getOns(factors[3]),
  ]);

  let finalOns = [];

  cities.forEach((city) => {
    let obj = {
      city: city,
      happiness: storedOns[0][city],
      worthwhile: storedOns[1][city],
      lifeSatisfaction: storedOns[2][city],
      anxiety: storedOns[3][city],
      average: `${(
        (Number(storedOns[0][city]) +
          Number(storedOns[1][city]) +
          Number(storedOns[2][city]) +
          10 -
          Number(storedOns[3][city])) /
        4
      ).toFixed(2)}`,
    };
    finalOns.push(obj);
  });

  finalOns.forEach(async (obj, index) => {
    const marker = await addMarker(obj.city);
    marker.bindPopup(`<b> ${obj.city}: </b> 
  <br>
  <b> Happiness:</b> ${obj.happiness}
  <br>
  <b> Worthwhile: </b> ${obj.worthwhile}
  <br>
  <b> Life-satisfaction: </b> ${obj.lifeSatisfaction}
  <br>
  <b> Anxiety: </b> ${obj.anxiety}
  <br>
  ${colourOns(obj.average)}
  <br>`).openPopup;
  });
});

async function addMarker(city) {
  try {
    const url = renderGeocodeUrl(city);
    const coords = await getCoordinates(url);
    var marker = L.marker([coords.latitude, coords.longitude]).addTo(map);
    return marker;
  } catch (error) {
    console.log(error);
  }
}
