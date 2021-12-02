// import { jobs } from '../mock/mockData.js';
// import { jobs } from "./jobsSearch.js";
import { getJobs } from "./jobsSearch.js";

const jobList = document.querySelector(".jobs > ul");

export async function getAndDisplayJobsData(url) {
  const jobsData = await getJobs(url);
  renderJobsSearchData(jobsData);
}

export const renderJobsSearchData = (jobData) => {
  return (jobList.innerHTML = `${jobData
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
    .join("")}`);
};

// renderJobsSearchData();
