import { fetchJobs } from './jobsSearch.js';

const jobList = document.querySelector('.jobs > ul');
const numberJobs = document.querySelector('.number-jobs');

export function renderNumberJobs({ totalResults }) {
  numberJobs.innerHTML = `${totalResults} matching jobs found`;
}

export async function getAndDisplayJobsData(url) {
  const jobsData = await fetchJobs(url);
  renderNumberJobs(jobsData);
  renderJobsSearchData(jobsData);
  return jobsData;
}

export const renderJobsSearchData = ({ jobs }) => {
  console.log(jobs);
  const jobString = jobs
    .map((job) => {
      return `<li class="card mb-5">
                <article class="card-content content">
                  <h3 class="title mb-4">${job.title}</h3>
                  <p>${job.employer}</p>
                  <p>${job.location}</p>
                  <p>${job.salaryRange}</p>
                  <p>${job.description}</p>
                  <button class="button">Favourite<i class="far fa-heart ml-2"></i></button>
                </article>
              </li>`;
    })
    .join('');
  jobList.innerHTML = jobString;
};
