// const Connection = require("mysql2/typings/mysql/lib/Connection");
const { promisifiedQuery } = require ("../db/connection"); 
// const faker = require('faker');

// bulkAd function using 'faker' in nested arrays to return data.
// const bulkAdd = () => {
//     let people = []
//     for(let i=0; i<500; i++){
//     people.push([faker.internet.email(), faker.date.past()]);
//     }
//     return [people]
// };



const queryString = "SELECT COUNT(*) AS total FROM users";

exports.getTotal = async () => {
    try {
        let data = await promisifiedQuery(queryString);
        console.log(data[0].total);
        return data[0].total;
    } catch (error) {
        console.log(error);
    }
}; 

// thew below finction contains a method of countering SQL Injection Attacks using '?' (Escaping Query Values) and inserting into an object.
exports.addEmail = async (userEmail) => {
    const queryString = "INSERT INTO users SET ?"
    // const fakeUserString= "INSERT INTO users (email, created_at) VALUES ?"
    try {
            // let data = await promisifiedQuery(fakeUserString, bulkAdd());
         let data = await promisifiedQuery(queryString, {email: usersEmail});
        return data;
    } catch (error) {
        console.log(error);
    }
};

// addEmail();
// getTotal();

// src/queries/index.js