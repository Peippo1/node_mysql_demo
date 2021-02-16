// get the client
const mysql = require('mysql2');
require('dotenv').config();
const { promisify } = require("util");
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
});

console.log(`successfully connected to ${process.env.DB_NAME} on MySQL Server`);
// promisifying function and binding query
exports.promisifiedQuery = promisify(connection.query).bind(connection);



// const runQuery = async () => {
//    try {
//     const query = 'SELECT * FROM users'
//     let data = await promisifiedQuery(query)
//     console.log(data);
//    } catch (error) {
//        console.log(error);   
//     }
// connection.end();    
// };

// runQuery();


// node src/db/connection.js