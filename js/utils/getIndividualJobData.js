import { fetchJobsData } from './fetchJobsData.js';
import { renderInvididualJobData } from './renderIndividualJobData.js';

const jobsModal = document.querySelector('.jobs-modal');
const jobList = document.querySelector('.jobs > ul');

const url = 'https://www.reed.co.uk/api/1.0/jobs/';

// This adds an event listener on h3 headers to fetch individual job data (which constistues of title, employer name, location, salary range, contract, description, job expiration date)
jobList.addEventListener('click', async function (event) {
  try {
    if (event.target.tagName === 'H3') {
      const id = event.target.dataset.id;
      const data = await fetchJobsData(url + id);
      const job = {
        title: data.jobTitle,
        employer: data.employerName,
        location: data.locationName,
        // an assumption is made here that any salary that doesn't store salary range info is deemed "salary negotiable"
        salaryRange:
          data.minimumSalary && data.maximumSalary
            ? `£${data.minimumSalary} - £${data.maximumSalary}`
            : 'Salary negotiable',
        contract: data.contractType,
        description: data.jobDescription,
        expirationDate: data.expirationDate,
      };
      renderInvididualJobData(job); // after job data is retrieved from fetch, individual job info is rendered on screen through a modal
      jobsModal.classList.add('is-active'); // modal status to active to enable the following event listener to exit modal screen on modal-background click

      const modalBg = document.querySelector('.modal-background');
      modalBg.addEventListener('click', function () {
        jobsModal.classList.remove('is-active');
      });
    }
  } catch (error) {
    console.log(error);
  }
});
