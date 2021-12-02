import { fetchJobsData } from './fetchJobsData.js';

const proxy = 'https://course-anywhere.herokuapp.com/';

export async function fetchJobs(url) {
  const rawData = await fetchJobsData(proxy + url);
  const { results, totalResults } = rawData;
  const totalPages = Math.ceil(totalResults / 2);
  const jobs = results.map((job) => {
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
  return {
    totalResults,
    totalPages,
    jobs,
  };
}
