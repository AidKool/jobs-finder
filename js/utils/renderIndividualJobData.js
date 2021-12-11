const jobsModal = document.querySelector('.jobs-modal');
// using string templates render individual job data for modal view upon the primary card h3 click
export function renderInvididualJobData({
  title,
  employer,
  location,
  salaryRange,
  contract,
  description,
  expirationDate,
}) {
  jobsModal.innerHTML = `
          <div class="modal-background"></div>
          <div class="modal-content has-background-white py-5 px-5">
            <h3 class="title mb-2">${title}</h3>
            <div class="company-container is-flex is-align-items-center mb-2">
              <i class="fas fa-building"></i>
              <p class="ml-2">${employer}</p>
            </div>
            <div class="location-container is-flex is-align-items-center mb-2">
              <i class="fas fa-map-marker-alt"></i>
              <p class="ml-2">${location}</p>
            </div>
            <div class="salary-container is-flex is-align-items-center mb-2">
              <i class="fas fa-pound-sign"></i>
              <p class="ml-2">${salaryRange}</p>
            </div>
            <div class="salary-container is-flex is-align-items-center mb-2">
              <i class="fas fa-file-signature"></i>
              <p class="ml-2">${contract}</p>
            </div>
            <div class="expiration-container is-flex is-align-items-center mb-2">
              <i class="fas fa-calendar-day"></i>
              <p class="ml-2">Expiration date: ${expirationDate}</p>
            </div>
            <p class="job-description mb-2">${description}</p>
          </div>
`;
}
