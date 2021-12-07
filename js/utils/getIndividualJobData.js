import { fetchJobsData } from './fetchJobsData.js';
import { renderInvididualJobData } from './renderIndividualJobData.js';

const jobsModal = document.querySelector('.jobs-modal');
const jobList = document.querySelector('.jobs > ul');

const url = 'https://www.reed.co.uk/api/1.0/jobs/';

jobList.addEventListener('click', async function (event) {
  try {
    if (event.target.tagName === 'H3') {
      const id = event.target.dataset.id;
      const data = await fetchJobsData(url + id);
      const job = {
        title: data.jobTitle,
        employer: data.employerName,
        location: data.locationName,
        salaryRange:
          data.minimumSalary && data.maximumSalary
            ? `£${data.minimumSalary} - £${data.maximumSalary}`
            : 'Salary negotiable',
        contract: data.contractType,
        description: data.jobDescription,
        expirationDate: data.expirationDate,
      };
      renderInvididualJobData(job);
      jobsModal.classList.add('is-active');

      const modalBg = document.querySelector('.modal-background');
      modalBg.addEventListener('click', function (event) {
        jobsModal.classList.remove('is-active');
        console.log(event.target);
      });
    }
  } catch (error) {
    console.log(error);
  }
});
