const database = require('./db')
const saveOrphanage = require("./saveOrphanage")

database.then(async (db) => {
    // inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-22.891",
        lng: "-47.066",
        name: 'Casa dos Menores de Campinas ',
        whatsapp: '456',
        description: 'Promove cidadania e o direito à vida digna de crianças, adolescentes e jovens em situação de vulnerabilidade social.',
        images: [
            'https://images.unsplash.com/photo-1602784380107-2b89803b7d46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',

            'https://images.unsplash.com/photo-1601758174609-3a789c37dfa8?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
        ].toString(),
        instructions: 'Venha como se sentir a vontade e traga muito amor e paciência para dar.',
        openHours: 'Horário de visitas das 8h às 18h',
        weekendAvailability: '0'
        
    })
    

    // consultar dados da tabela
    const selectedData = await db.all("SELECT * FROM orphanageSelect")
    console.log(selectedData)

    // consultar somente 1 orfanato pelo ID
    const orphanage = await db.all('SELECT * FROM orphanageSelect WHERE id = "1"')
    console.log(orphanage)

    // deletar entradas na tabela
    // await db.run('DELETE FROM orphanageSelect WHERE id = "2"') // deleta id=2
    // await db.run('DELETE FROM orphanageSelect) DELETA TODOS OS DADOS
    
})