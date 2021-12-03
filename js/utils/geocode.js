// const requestUrl = 'https://geocode.xyz/locate?json=1'

// $.ajax({
//     url: requestUrl,
//     data: {
//       auth: '155090176203451453482x53719',
//       region: 'UK',
//       streetname: 'Roker Avenue',
//       cityname: 'Manchester',
//       geoit: JSON
//     }
//   }).done(function(data) {
//     console.log('mapData', data);

    // console.log(data.standard)
  // });

  $.ajax({
    url: 'https://geocode.xyz',
    data: {
      auth: '155090176203451453482x53719',
      locate: 'Manchester',
      json: '1'
    }
  }).done(function(data) {
    console.log('APIdata', data);
  });

  