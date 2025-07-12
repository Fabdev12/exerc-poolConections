const {Pool} = require("pg")

const pool = new Pool({
    connectionString: "postgresql://postgres:901206@localhost:5432/eventos_exer"
});

async function query(queryString, params, callback){
    console.log("log: query executada - " + queryString)
    return pool.query(queryString, params, callback)
}

module.exports = { query }