// This file contains the DB configuration
const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
    options: {
        encrypt: false,
        trustServerCertificate: true
    }
};

async function connectDB() {
    try 
    {
        let db = await sql.connect(config);
        return db;

    } 
    catch (err)
    {
        console.error('Error trying to connect to database:', err);
    }
}

module.exports = {
    connectDB,
    sql
};