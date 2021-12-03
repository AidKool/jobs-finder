import { fetchJobsData } from './fetchJobsData.js';

const url = 'https://www.reed.co.uk/api/1.0/jobs/';

const jobList = document.querySelector('.jobs > ul');

jobList.addEventListener('click', async function (event) {
  if (event.target.tagName === 'H3') {
    const id = event.target.dataset.id;
    const data = await fetchJobsData(url + id);
    console.log(data);
  }
});
