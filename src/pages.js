const { response } = require('express')
const database = require('./database/db')
const saveOrphanage = require('./database/saveOrphanage')

//*********************************************************
//testando database com arquivo fakedata
//const orphanageSelect = require('./database/fakedata.js')
//*********************************************************

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    // colocar orphanage pelo banco
    async orphanageSelect(req, res) {
        try {
            const db = await database
            const orphanageSelect = await db.all("SELECT * FROM orphanageSelect")
            return res.render('orphanage-select',  {orphanageSelect})
            
        } catch (error) {
            console.log('database error' + error)
            return res.send('database error')
        }
    },

    async orphanageDetails(req, res) {
        const id = req.query.id

        try {
            const db = await database
            const results = await db.all(`SELECT * FROM orphanageSelect WHERE id = "${id}"`)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.mainDisplay = orphanage.images[0]

            if (orphanage.weekendAvailability == "0") {
                orphanage.weekendAvailability = false
            } else {
                orphanage.weekendAvailability = true
            }

            
            return res.render('orphanage-details', { orphanage })
        } catch (error) {
            console.log(error)
            return res.send("database error")
        }
    },

    orphanageRegister(req, res) {
        return res.render('orphanage-register')
    },

    async saveOrphanage(req, res) {
        console.log(req.body)
        const fields = req.body
        
        // validar se todos os campos estão preenchidos
        if(Object.values(fields).includes('')) {
            return res.send('Todos os campos devem ser preenchidos! Utilize o botão "VOLTAR <=" do navegador para voltar ao formulário')
        }

        // salvar formulario de registro
        try {
            const db = await database
            await saveOrphanage(db, {
                lat: fields.lat,
                lng: fields.lng,
                name: fields.name,
                description: fields.description,
                whatsapp: fields.whatsapp,
                images: fields.images.toString(),
                instructions: fields.instructions,
                openHours: fields.openHours,
                weekendAvailability: fields.weekendAvailability
            })

            // redirecionamento
            return res.redirect('/orphanage-select')            
        } catch (error) {
            console.log(error)
            return res.send('database error')
        }        

    }

}