import { renderOnsUrl } from './renderOnsUrl.js';
import { fetchOnsData } from './fetchOnsData.js';

// This is const array for cities in the UK. These cities need to exactly match the description in the ONS API to render wellbeing statistics. You can add as many UK regions/cities as per your discretion.
export const cities = [
  'Manchester',
  'London',
  'Birmingham',
  'Liverpool',
  'Southampton',
  'Leeds',
  'Cardiff',
  'Glasgow City',
  'City of Edinburgh',
  'Nottingham',
  'Belfast',
  'Norwich',
  'Brighton and Hove',
  'Aberdeen City',
  'Blackpool',
  'Lancaster',
  'Stoke-on-Trent',
  'Oxford',
  'Cambridge',
  'York',
  'Luton',
  'Dover',
  'Leicester',
  'Exeter',
  'Plymouth',
  'Gloucester',
  'Barrow-in-Furness',
];

export async function getOns(factor) {
  try {
    const url = renderOnsUrl(factor);
    //Fetch call used below returns ONS data for all regions.
    const data = await fetchOnsData(url);
    // destructure data retrieved from fetch
    const { observations } = data;
    // obtains wellbeing values for a given factor
    let wellbeing = observations.map(({ observation }) => observation);
    // obtains the respective local geography for the wellbeing value
    let geography = observations.map((a) => a.dimensions['Geography'].label);
    //Results are then filtered to return only cities included in the cities array included above.
    let result = {};
    geography.forEach((key, i) => (result[key] = wellbeing[i]));
    const filtered = Object.keys(result)
      .filter((key) => cities.includes(key))
      .reduce((obj, key) => {
        obj[key] = result[key];
        return obj;
      }, {});
    return filtered;
  } catch (error) {
    console.log(error);
  }
}
