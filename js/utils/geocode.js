const requestUrl = 'https://geocode.xyz/norwich?json=1'
// const geocodeKey = '155090176203451453482x53719'

function geoCodeApi(requestUrl) {
  
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    })  
}
geoCodeApi(requestUrl)

// target.addEventListener('submit', async function (event) {
//   event.preventDefault()
// })
