let mockJob = {
  title: 'job title',
  employer: 'employer name',
  location: 'location',
  minSalary: 'min salary',
  maxSalary: 'max salary',
  description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi, tenetur.',
};

const numberOfJobs = 10;

const jobs = [...Array(numberOfJobs)].map((job, index) => {
  job = Object.assign({}, mockJob);
  job.title = `job #${index + 1}`;
  return job;
});
