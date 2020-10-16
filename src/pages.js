const orphanageSelect = require('./database/fakedata.js')

module.exports = {

    index(req, res) {
        return res.render('index')
    },

    orphanageSelect(req, res) {
        return res.render('orphanage-select',  {orphanageSelect})
    },

    orphanageDetails(req, res) {
        return res.render('orphanage-details')
    },

    orphanageRegister(req, res) {
        return res.render('orphanage-register')
    }

}