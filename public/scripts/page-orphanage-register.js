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
})

// create and add marker

let marker;

mymap.on('click', (event) => {
    const lat = event.latlng.lat
    const lng = event.latlng.lng
    
    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove marker pin
    marker && mymap.removeLayer(marker)

    // add marker pin
    marker = L.marker([lat, lng], {icon})
    .addTo(mymap)
})

// add photo field

function addPhotoField (){
    // pegar o container de fotos #images
    const container = document.querySelector('#images')

    // pegaro container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    
    // realizar o clone da última imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    
    // verificar se o input está vazio | SIM = não adicioar ao container #images
    const input = newFieldContainer.children[0]
    
    if (input.value == "") {
        return
    }
    
    // limpar o campo antes de adicionar ao container #images
    input.value = ""
    
    // adicionar o clone ao container #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')
    if (fieldsContainer.length <= 1) {
        span.parentNode.children[0].value = ""
        return
    }
    // deletar o campo
    span.parentNode.remove()
}

// select yes/no

function toggleSelect(event) {
    // pegar o botão clicado
    
    // limpar class .active
    document.querySelectorAll('.button-select button')
    .forEach( (button) => {button.classList.remove('active')} )

    // colocar class .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="weekend-check"]')
    input.value = button.dataset.value
    
    // verificar se sim ou nao

}