let mockJob = {
  title: 'job title',
  employer: 'employer name',
  location: 'location',
  minSalary: '20000',
  maxSalary: '30000',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, tenetur.',
};

const numberOfJobs = 10;

export const jobs = [...Array(numberOfJobs)].map((job, index) => {
  job = Object.assign({}, mockJob);
  job.title = `job #${index + 1}`;
  return job;
});
