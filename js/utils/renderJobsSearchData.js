import { fetchJobs } from './jobsSearch.js';

const jobList = document.querySelector('.jobs > ul');
const numberJobs = document.querySelector('.number-jobs');
const favourites = document.querySelectorAll('.favourite');
export function renderNumberJobs({ totalResults }) {
  numberJobs.innerHTML = `${totalResults} matching jobs found`;
}

export async function getAndDisplayJobsData(url) {
  const jobsData = await fetchJobs(url);
  renderNumberJobs(jobsData);
  renderJobsSearchData(jobsData.jobs);
  return jobsData;
}

export const renderJobsSearchData = (jobs) => {
  console.log(jobs);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  const jobString = jobs
    .map((job, index) => {
      return `<li class="card mb-5">
                <article class="card-content content">
                  <h3 class="title mb-4" data-id="${job.id}">${job.title}</h3>
                  <div class="company-container is-flex is-align-items-center mb-2">
                  <i class="fas fa-building"></i>
                  <p class="ml-2">${job.employer}</p>
                  </div>
                  <div class="location-container is-flex is-align-items-center mb-2">
                  <i class="fas fa-map-marker-alt"></i>
                  <p class="ml-2">${job.location}</p>
                  </div>
                  <div class="salary-container is-flex is-align-items-center mb-2">
                  <i class="fas fa-pound-sign"></i>
                  <p class="ml-2">${job.salaryRange}</p>
                  </div>
                  <p>${job.description}</p>
                  <button class="button favourite" data-order="${index}">Favourite<i class="far fa-heart ml-2"></i></button>
                </article>
              </li>`;
    })
    .join('');
  jobList.innerHTML = jobString;
  let storedJobs = JSON.parse(localStorage.getItem('favourites')) || [];
  const storedIds = storedJobs.map(function (obj) {
    return obj.id;
  });
  jobs.forEach((e, i) => {
    if (storedIds.includes(e.id)) {
      const button = document.querySelector(`[data-order="${i}"]`);
      button.innerHTML = `Favourite<i class="fas fa-heart ml-2"></i>`;
    }
  });
  favouritesHandler();
};

function favouritesHandler() {
  const favourites = document.querySelectorAll('.favourite');
  favourites.forEach((item) => {
    item.addEventListener('click', (event) => {
      var element = event.target;
      const rank = element.getAttribute('data-order');
      let storedJobs = JSON.parse(localStorage.getItem('jobs'));
      let favouriteJobs = JSON.parse(localStorage.getItem('favourites')) || [];
      const favouriteIds = favouriteJobs.map(function (obj) {
        return obj.id;
      });
      if (!favouriteIds.includes(storedJobs[rank].id)) {
        favouriteJobs.push(storedJobs[rank]);
        console.log(document.querySelector('i'));
        element.innerHTML = `Favourite<i class="fas fa-heart ml-2"></i>`;
      } else {
        element.innerHTML = `Favourite<i class="far fa-heart ml-2"></i>`;
        favouriteJobs.splice(
          favouriteJobs.findIndex((v) => v.id === storedJobs[rank].id),
          1
        );
      }
      localStorage.setItem('favourites', JSON.stringify(favouriteJobs));
    });
  });
}
