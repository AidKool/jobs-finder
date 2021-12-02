import { fetchJobsData } from "./fetchJobsData.js";

const keywords = ["developer", "web developer"].join(",");
const locationName = "manchester";
const distanceFromLocation = 10;
const permanent = true;
const contract = true;
const temp = true;
const partTime = true;
const fullTime = true;
const minimumSalary = 20000;
const maximumSalary = 25000;
const postedByRecruitmentAgency = true;
const postedByDirectEmployer = true;
const graduate = true;
const resultsToTake = 10;
const resultsToSkip = 5;

const proxy = "https://course-anywhere.herokuapp.com/";
const url = `https://www.reed.co.uk/api/1.0/search?keywords=${keywords}&distanceFromLocation=${distanceFromLocation}&permanent=${permanent}&contract=${contract}&temp=${temp}&partTime=${partTime}&fullTime=${fullTime}&minimumSalary=${minimumSalary}&maximumSalary=${maximumSalary}&postedByRecruitmentAgency=${postedByRecruitmentAgency}&postedByDirectEmployer=${postedByDirectEmployer}&locationName=${locationName}&resultsToTake=10`;

const rawData = await fetchJobsData(proxy + url);
const data = rawData.results;

export const jobs = data.map((job) => {
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
