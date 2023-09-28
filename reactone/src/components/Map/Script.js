$( document ).ready(function() {
    var map = L.map('map').setView([27.7172,85.3240], 13);
    var marker = L.marker([27.7077, 85.3252]).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


});