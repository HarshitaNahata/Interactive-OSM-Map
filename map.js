// Map initialization
const map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Default marker with popup
const defaultMarker = L.marker([51.505, -0.09])
    .bindPopup(`
        <div class="popup-content">
            <h3>Big Ben</h3>
            <p>Iconic clock tower at the Palace of Westminster</p>
            <ul>
                <li>Height: 96m</li>
                <li>Built: 1859</li>
                <li>Architect: Augustus Pugin</li>
            </ul>
            <small>Source: <a href="https://www.parliament.uk" target="_blank">UK Parliament</a></small>
        </div>
    `)
    .addTo(map);

// Custom marker example (uncomment to use)
/*
const customIcon = L.icon({
    iconUrl: 'assets/custom-marker.png',
    iconSize: [40, 40],
    iconAnchor: [20, 40]
});

L.marker([51.503, -0.09], {icon: customIcon})
    .bindPopup("Custom Marker Example")
    .addTo(map);
*/

// Optional: Add click event listener
map.on('click', function (e) {
    L.popup()
        .setLatLng(e.latlng)
        .setContent(`Clicked at: ${e.latlng.toString()}`)
        .openOn(map);
});
