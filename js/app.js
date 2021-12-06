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

const favouritesBtn = document.querySelector('.favourites');

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

    // console.log(checkedCriteria);
  });
});

form.addEventListener('submit', async function (event) {
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
  //invoke getAndDisplayJobsData with the new url inside the pagination button event listener
  console.log(url);
  // Gets and displays job data
  const jobsData = await getAndDisplayJobsData(url);
  initialisePaginationButtons(jobsData);
});

favouritesBtn.addEventListener('click', function () {
  window.location.replace('/favourites.html');
});

window.addEventListener('DOMContentLoaded', () => {
  let factors = ['happiness', 'worthwhile', 'life-satisfaction', 'anxiety'];
  let cities = ['Manchester', 'London', 'Birmingham', 'Liverpool'];
  let factorsFiltered = [];
  let coordinates = [];

  cities.forEach(async (city, index, array) => {
    const coords = addMarker(city, index, array);
    coordinates.push(coords);
  });

  factors.forEach(async (factor) => {
    const url = renderOnsUrl(factor);
    console.log(url);
    const data = await fetchOnsData(url);
    const { observations } = data;
    let wellbeing = observations.map(({ observation }) => observation);
    let geography = observations.map((a) => a.dimensions['Geography'].label);
    let result = {};
    geography.forEach((key, i) => (result[key] = wellbeing[i]));
    const filtered = Object.keys(result)
      .filter((key) => cities.includes(key))
      .reduce((obj, key) => {
        obj[key] = result[key];
        return obj;
      }, {});
    factorsFiltered.push(filtered);
    // Object created
    let obj = {};

    // Using loop to insert key to value in object
    for (let i = 0; i < factors.length; i++) {
      obj[factors[i]] = factorsFiltered[i];
    }
    console.log('filtered', factorsFiltered);
    console.log(obj);
    localStorage.setItem('ons', JSON.stringify(obj));
  });

  console.log('DOM fully loaded and parsed');
});

// let cityCoordinates =[{id: Manchester, lon: ,lat:}]

async function addMarker(city, index, array) {
  const url = renderGeocodeUrl(city);
  const coords = await getCoordinates(url);
  coords['id'] = array[index];
  L.marker([coords.latitude, coords.longitude]).addTo(map);
  return coords;
}

function addPopup(city) {}
