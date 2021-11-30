import { fetchData } from './fetchData.js';

const keywords = ['developer'].join(',');
const locationName = 'manchester';
const distdistanceFromLocationance = 10;
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

const url = `https://www.reed.co.uk/api/1.0/search?keywords=${keywords}&location=${locationName}`;

const data = await fetchData(url);

console.log(data);
