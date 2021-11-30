const key = '1459635b-4489-42d0-b950-45f8623b8242';

let headers = new Headers();
headers.append('Authorization', 'Basic ' + btoa(key + ':'));

export async function fetchData(URL) {
  const response = await fetch(URL, {
    method: 'GET',
    headers: headers,
  });
  const data = await response.json();
  return data;
}
