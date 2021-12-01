import { jobs } from '../mock/mockData.js';

console.log(jobs);

const jobList = document.querySelector('.jobs > ul');

console.log(jobList);

function renderJobsSearchData() {
  jobList.innerHTML = `${jobs
    .map((job) => {
      return `<li class="card mb-5">
                <article class="card-content content">
                  <h3 class="title mb-4">${job.title}</h3>
                  <p>${job.employer}</p>
                  <p>${job.location}</p>
                  <p>£${job.minSalary} - £${job.maxSalary}</p>
                  <p>${job.description}</p>
                  <button class="button">Favourite<i class="far fa-heart ml-2"></i></button>
                </article>
              </li>`;
    })
    .join('')}`;
}

renderJobsSearchData();
