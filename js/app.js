import { initialisePaginationButtons } from './utils/paginationButtons.js';
import './utils/pagination.js';
import { renderUrl } from './utils/renderUrl.js';
import { map } from './utils/leaflet.js';
import './utils/renderJobsSearchData.js';
import { getAndDisplayJobsData } from './utils/renderJobsSearchData.js';
import { getCoordinates } from './utils/geocode.js';
import './utils/getIndividualJobData.js';
import { renderGeocodeUrl } from './utils/renderGeocodeUrl.js';
import './utils/toggleForm.js';
import { formContainer } from './utils/toggleForm.js';
import { setHeight } from './utils/setHeight.js';
import { getOns, cities } from './utils/getOns.js';
import { colourOns } from './utils/colourOns.js';

// Define DOM elements
const keywordsElement = document.querySelector('input.what');
const locationElement = document.querySelector('input.where');
const form = document.querySelector('form');
const distanceElement = document.querySelector('select.distance');
const salaryFromElement = document.querySelector('select.starting-salary');
const salaryToElement = document.querySelector('select.ending-salary');
const submitBtn = document.querySelector('button.submit');

const checkboxes = document.querySelectorAll('input[type=checkbox]');

let checkedCriteria = [];
checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('change', function () {
    checkedCriteria = [...checkboxes]
      .filter((i) => i.checked)
      .map((i) => i.attributes['name'].value);
  });
});

form.addEventListener('submit', async function (event) {
  try {
    event.preventDefault();
    submitBtn.classList.add('is-loading');

    const locationName = locationElement.value;
    const keywords = keywordsElement.value;
    const distance = distanceElement.value;
    const minimumSalary = salaryFromElement.value;
    const maximumSalary = salaryToElement.value;
    const checkedUrl = checkedCriteria
      .map((k) => {
        return `&${k}=true`;
      })
      .join('');
    // Below function will render the url
    const url = renderUrl(
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
    console.error(error);
  }
});

window.addEventListener('DOMContentLoaded', async () => {
  let factors = ['happiness', 'worthwhile', 'life-satisfaction', 'anxiety'];

  const storedOns = await Promise.all([
    ...factors.map((factor) => getOns(factor)),
  ]);

  const finalOns = [];

  cities.forEach((city) => {
    const cityData = {
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
    finalOns.push(cityData);
  });

  finalOns.forEach(async (data) => {
    const marker = await addMarker(data.city);
    marker.bindPopup(`<b> ${data.city}: </b> 
  <br>
  <b> Happiness:</b> ${data.happiness}
  <br>
  <b> Worthwhile: </b> ${data.worthwhile}
  <br>
  <b> Life-satisfaction: </b> ${data.lifeSatisfaction}
  <br>
  <b> Anxiety: </b> ${data.anxiety}
  <br>
  <b>Average: <span class="${colourOns(data.average)}">${
      data.average
    }</span></b>
  <br>`).openPopup;
  });
});

async function addMarker(city) {
  try {
    const url = renderGeocodeUrl(city);
    const coords = await getCoordinates(url);
    const marker = L.marker([coords.latitude, coords.longitude]).addTo(map);
    return marker;
  } catch (error) {
    console.error(error);
  }
}
