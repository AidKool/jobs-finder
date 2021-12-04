import { renderJobsSearchData } from './utils/renderJobsSearchData.js';
import './utils/getIndividualJobData.js';

const favouritesBtn = document.querySelector('.favourites');

const favourites = JSON.parse(localStorage.getItem('favourites')) || [];

window.addEventListener('DOMContentLoaded', function () {
  renderJobsSearchData(favourites);
});

favouritesBtn.addEventListener('click', function () {
  window.location.reload();
});
