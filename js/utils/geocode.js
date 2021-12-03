$.ajax({
  url: 'https://geocode.xyz',
  data: {
    auth: '155090176203451453482x53719',
    locate: 'Manchester',
    json: '1'
  }
}).done(function(data) {
  console.log(data);
});