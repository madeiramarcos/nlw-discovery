function saveOrphanage(db, orphanageSelect) {
    return db.run(`
        INSERT INTO orphanageSelect (
            lat,
            lng,
            name,
            whatsapp,
            images,
            instructions,
            description,
            openHours,
            weekendAvailability
        ) VALUES (
            "${orphanageSelect.lat}",
            "${orphanageSelect.lng}",
            "${orphanageSelect.name}",
            "${orphanageSelect.whatsapp}",
            "${orphanageSelect.images}",
            "${orphanageSelect.instructions}",
            "${orphanageSelect.description}",
            "${orphanageSelect.openHours}",
            "${orphanageSelect.weekendAvailability}"
        );
    `)

}

module.exports = saveOrphanage;