import { fetchJobs } from './jobsSearch.js';
import { removeTags } from './removeTags.js';

const jobList = document.querySelector('.jobs > ul');
const numberJobs = document.querySelector('.number-jobs');
const submitBtn = document.querySelector('button.submit');

export function renderNumberJobs({ totalResults }) {
  numberJobs.innerHTML = `${totalResults} matching jobs found`;
}

// global function to get and display job data including number of search results
// function also removes "is-loading" animation upon rendering job search results
export async function getAndDisplayJobsData(url) {
  try {
    const jobsData = await fetchJobs(url);
    renderNumberJobs(jobsData);
    renderJobsSearchData(jobsData.jobs);
    submitBtn.classList.remove('is-loading');
    return jobsData;
  } catch (error) {
    console.log(error);
  }
}
// using string templates render primary card job data
export const renderJobsSearchData = (jobs) => {
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
                  <div>
                    <article>${removeTags(job.description)}</article>
                  </div>
                  <br>
                  <button class="button favourite" data-order="${index}">Favourite<i class="far fa-heart ml-2"></i></button>
                </article>
              </li>`;
    })
    .join('');
  jobList.innerHTML = jobString;
  // retrieve saved jobs in favourites if any or save storedJobs as an empty array
  let storedJobs = JSON.parse(localStorage.getItem('favourites')) || [];
  // for any jobs stored in local storage favourites, update the colour of the fa heart icon to display to the user that it has been saved
  const storedIds = storedJobs.map(function (obj) {
    return obj.id;
  });
  jobs.forEach((e, i) => {
    if (storedIds.includes(e.id)) {
      const button = document.querySelector(`[data-order="${i}"]`);
      button.innerHTML = `Favourite<i class="fas fa-heart ml-2"></i>`;
    }
  });
  //adds event listener on all favourite jobs stored to enable dynamic like/unlike or store/unstore functionality
  favouritesHandler();
};

function favouritesHandler() {
  const favourites = document.querySelectorAll('.favourite');
  favourites.forEach((item) => {
    item.addEventListener('click', (event) => {
      const element = event.currentTarget;
      const rank = element.getAttribute('data-order');
      // storedJobs gets all jobs currently displayed on screen (i.e. the 5 jobs)
      let storedJobs = JSON.parse(localStorage.getItem('jobs'));
      // favouriteJobs gets all jobs that have been favourited. favouriteIds retrieves the respective favourite job id's
      let favouriteJobs = JSON.parse(localStorage.getItem('favourites')) || [];
      const favouriteIds = favouriteJobs.map(function (obj) {
        return obj.id;
      });
      // if one of the 5 jobs displayed has been already favourited previously, then update the fa icon accordingly to reflect this
      if (!favouriteIds.includes(storedJobs[rank].id)) {
        favouriteJobs.push(storedJobs[rank]);
        element.innerHTML = `Favourite<i class="fas fa-heart ml-2"></i>`;
      } else {
        //otherwise render an empty fa-heart icon and remove job from favouriteJobs list
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
