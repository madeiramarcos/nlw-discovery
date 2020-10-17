const database = require('sqlite-async')

// db cria elementos na tabela do database
function execute(db) {
    return db.exec(`
    CREATE TABLE IF NOT EXISTS orphanageSelect (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        lat TEXT,
        lng TEXT,
        name TEXT,
        description TEXT,
        whatsapp TEXT,
        images TEXT,
        instructions TEXT,
        openHours TEXT,
        weekendAvailability TEXT
        );
        `)
    }

module.exports = database.open(__dirname + '/database.sqlite').then(execute)