require('dotenv').config();
const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb+srv://J_Kalsi:1234@soen341.vaay8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");


exports.getAllProducts = async function getAllProducts(){
    const allproducts = [];
    await client.connect();
    (await client.db("Products").collections()).forEach(c => {
        c.find().forEach(p => {
            allproducts.push(p);
        })
    })
    return allproducts;
}

exports.getAllShoes = async function getAllShoes(){
    await client.connect();
    return client.db("Products").collection("Shoes").find().toArray();
}

exports.getAllShirts = async function getAllShirts(){
    await client.connect();
    return client.db("Products").collection("Shirts").find().toArray();
}
exports.getAllShoes = async function getAllShoes(){
    await client.connect();
    return client.db("Products").collection("Shoes").find().toArray();
}