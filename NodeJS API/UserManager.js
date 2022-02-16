require('dotenv').config();
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb+srv://M_Afandi:Syna2462@soen341.vaay8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

async function listDatabases(client){
    const databaseslist = await client.db();
    console.log(databaseslist);
}
async function createNormalUser(client){
    await client.db("users").collection("normalUser").insertOne({
        firstName: "FirstName",
        lastName: "LastName"
    })
}
async function getAllUsers(){
    await client.connect();
    return client.db("users").collection("normalUser").find({firstName=""})
}

async function getUser(id){
    await client.connect();
    return await client.db("users").collection("normalUser").find()
}

async function createUser(user){
    await client.connect();
    return await client.db("users").collection("normalUser").insertOne(user)
}

module.exports = {
    listAllUsers: getAllUsers()
}
