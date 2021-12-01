import { fetchData } from "./fetchData.js";

const keywords = ["developer", "web developer"].join(",");
const locationName = "manchester";
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

const proxy = "https://course-anywhere.herokuapp.com/";
const url = `https://www.reed.co.uk/api/1.0/search?keywords=${keywords}&location=${locationName}&resultsToTake=1`;

const data = await fetchData(proxy + url);

console.log(data);
