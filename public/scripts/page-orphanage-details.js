const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

// create map environment

const mymap = L.map("mapid", options).setView([-22.896, -47.075], 15);

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
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker

L.marker([-22.896, -47.075], {icon})
.addTo(mymap)


// image gallery

  function selectImage(event) {
    const button = event.currentTarget
    
    // remove all .active classes from other buttons
    const buttons = document.querySelectorAll('.images button')
    buttons.forEach((button) => {button.classList.remove('active')})
    
    // add .active class to selected button
    button.classList.add('active')
    
    // select clicked button
    const image = button.children[0]
    const mainDisplayImg = document.querySelector('.orphanage-details > img')
    // const mainDisplayAlt = document.querySelector('.orphanage-details > alt')

    // update main-display img and alt
    mainDisplayImg.src = image.src
    mainDisplayImg.alt = image.alt

  }