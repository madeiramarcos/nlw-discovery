// create map environment

const mymap = L.map("mapid").setView([-22.89, -47.07], 15);

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



// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup()


// custom icon 

const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create popup box

const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Lar das meninas <a href="orphanage.html?id=1" class="choose-orphanage"><img src="./public/images/arrow-white.svg" alt="arrow icon"></a>')

// create and add marker

L.marker([-22.89, -47.07], {icon})
  .addTo(mymap)
  .bindPopup(popup)  