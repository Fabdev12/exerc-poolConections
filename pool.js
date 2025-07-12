const {Pool} = require("pg")

const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

async function query(queryString, params, callback){
    console.log("log: query executada - " + queryString)
    return pool.query(queryString, params, callback)
}

module.exports = { query }