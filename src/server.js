// importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// iniciando express lib
const server = express()
server
    // utilizando os arquivos estáticos
    .use(express.static('public'))

    // configurar template engine
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/orphanage-select', pages.orphanageSelect)
    .get('/orphanage-details', pages.orphanageDetails)
    .get('/orphanage-register', pages.orphanageRegister)

// ligar o servidor
server.listen(5500)