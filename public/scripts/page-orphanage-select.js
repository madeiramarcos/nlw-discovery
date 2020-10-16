// create map environment

const mymap = L.map("mapid").setView([-22.896, -47.075], 15);

// add tileLayer to map environment

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1IjoibWFkZWlyYW1hcmNvcyIsImEiOiJja2c5MDBxOTcwbTkwMnBud3lnaGpzN3V1In0.XbYrg7VsH9x5B3mL5x8jqA",
  }
).addTo(mymap);

// custom icon 

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

function addMarker({id, name, lat, lng}) {
  
  // create popup overlay

  const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
  }).setContent(`${name} <a href="/orphanage-details?id=${id}"><img src="/images/arrow-white.svg" alt="arrow icon"></a>`)

  // create and add marker

  L.marker([lat, lng], {icon})
  .addTo(mymap)
  .bindPopup(popup)    
}

const orphanagesSpan = document.querySelectorAll('.orphanage-list span')

orphanagesSpan.forEach( (span) => {
  const orphanage = {
    id: span.dataset.id,
    name: span.dataset.name,
    lat: span.dataset.lat,
    lng: span.dataset.lng
  }

  addMarker(orphanage)
})