// I want to create a function that allows long and lat to be provided upon form submit eventlistener

export async function geoCodeApi(city) {
  const requestUrl = 'https://geocode.xyz/?locate='+city+'&geoit=json'
  let response = await fetch(requestUrl, {
    method: 'GET',
  }).then(function (response) {
    return response.json()
  })
  console.log(response)
  return response
  
}

// var coordinates = geoCodeApi('burnley')
// console.log('coord', coordinates)

//find submit for the form
//import this function into that file
//call this function inside the submit
//pass in the right location value to this function
