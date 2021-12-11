// sets initial map view to UK coordinates
export const map = L.map('map').setView([53.483959, -2.244644], 6);

// Uses maptiler api to render street tiles with 512x512 size. Attributions to maptiler, openstreetmap and leaflet are also rendered on screen
export const tileLayer = L.tileLayer(
  'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=vXHoLejq0rBnYbqJIdKe',
  {
    attribution:
      '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  }
).addTo(map);
