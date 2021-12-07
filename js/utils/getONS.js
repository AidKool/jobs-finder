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
];

const factors = ['happiness', 'worthwhile', 'life-satisfaction', 'anxiety'];

export async function getONS(factor) {
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
    // factorsFiltered.push(filtered);
    // Object created
    // let obj = {};

    // Using loop to insert key to value in object
    // for (let i = 0; i < factors.length; i++) {
    //   obj[factors[i]] = factorsFiltered[i];
    // }
    return filtered;
    console.log(filtered);
    // localStorage.setItem('ons', JSON.stringify(obj));
  } catch (error) {
    console.log(error);
  }
}

// Promise.all([
//   getONS(factors[0]),
//   getONS(factors[1]),
//   getONS(factors[2]),
//   getONS(factors[3]),
// ]).then((values) => {
//   console.log(values);
// });
