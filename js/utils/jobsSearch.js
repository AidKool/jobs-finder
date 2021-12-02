import { fetchJobsData } from './fetchJobsData.js';
import { filters } from './filters.js';

const { keywords, locationName, resultsToTake } = filters;

const proxy = 'https://course-anywhere.herokuapp.com/';
const url = `https://www.reed.co.uk/api/1.0/search?keywords=${keywords}&locationName=${locationName}&resultsToTake=${resultsToTake}`;

const rawData = await fetchJobsData(proxy + url);
const { results } = rawData;
export const { totalResults } = rawData;
export const totalPages = Math.ceil(totalResults / resultsToTake);
export const jobs = results.map((job) => {
  return {
    id: job.jobId,
    title: job.jobTitle,
    employer: job.employerName,
    location: job.locationName,
    salaryRange:
      job.minimumSalary && job.maximumSalary ? `£${job.minimumSalary} - £${job.maximumSalary}` : 'Salary negotiable',
    description: job.jobDescription,
  };
});
