const { query } = require("./pool");


async function createtable(){
    await query(`
        CREATE TABLE IF NOT EXISTS events (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            event_date DATE NOT NULL,
            total_tickets INT NOT NULL,
            tickets_sold INT DEFAULT 0
        )
    `)

    console.log("Events table create sucessfully!")

    process.exit()
}

createtable();

