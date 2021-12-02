import { fetchJobsData } from "./fetchJobsData.js";

export async function getJobs(url) {
  const proxy = "https://course-anywhere.herokuapp.com/";
  const rawData = await fetchJobsData(proxy + url);
  const data = rawData.results;
  return data.map((job) => {
    return {
      id: job.jobId,
      title: job.jobTitle,
      employer: job.employerName,
      location: job.locationName,
      salaryRange:
        job.minimumSalary && job.maximumSalary
          ? `£${job.minimumSalary} - £${job.maximumSalary}`
          : "Salary negotiable",
      description: job.jobDescription,
    };
  });
}
