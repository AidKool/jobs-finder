import { renderOnsUrl } from './renderOnsUrl.js';
import { fetchOnsData } from './fetchOnsData.js';

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
    const data = await fetchOnsData(url);
    const { observations } = data;
    let wellbeing = observations.map(({ observation }) => observation);
    let geography = observations.map((a) => a.dimensions['Geography'].label);
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
