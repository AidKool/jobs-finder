const key = '1459635b-4489-42d0-b950-45f8623b8242';
const proxy = 'https://course-anywhere.herokuapp.com/';

let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(key + ':'));

// fetches jobs data from the Reeds API by providing url as input with proxy being stored as a constant
// the proxy is used to avoid CORS restrictions on browsers
export async function fetchJobsData(URL) {
  const response = await fetch(proxy + URL, {
    method: 'GET',
    headers: headers,
  });
  const data = await response.json();
  return data;
}
