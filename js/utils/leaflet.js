// var mapElement = document.getElementById(map);

var map = L.map("map").setView([53.483959, -2.244644], 6);

L.tileLayer(
  "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=asHo0upHjsCi8cGPV9nd",
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);

var marker = L.marker([53.483959, -2.244644]).addTo(map);
var marker = L.marker([51.5, -0.09]).addTo(map);
