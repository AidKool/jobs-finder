import { fetchJobsData } from './fetchJobsData.js';

// fetch card job data which displays general info about the job. Note that job description is not provided in full by the Reeds API
export async function fetchJobs(url) {
  try {
    const rawData = await fetchJobsData(url);
    const { results, totalResults } = rawData;
    const totalPages = Math.ceil(totalResults / 5);
    const jobs = results.map((job) => {
      return {
        id: job.jobId,
        title: job.jobTitle,
        employer: job.employerName,
        location: job.locationName,
        salaryRange:
          job.minimumSalary && job.maximumSalary
            ? `£${job.minimumSalary} - £${job.maximumSalary}`
            : 'Salary negotiable',
        description: job.jobDescription,
      };
    });
    return {
      totalResults,
      totalPages,
      jobs,
    };
  } catch (error) {
    console.log(error);
  }
}
