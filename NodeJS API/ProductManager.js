require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb+srv://M_Afandi:Syna2462@soen341.vaay8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");



exports.getAllProducts = async function getAllProducts(){
    await client.connect();
    return client.db("Products").collection("clothing").find().toArray();
}


exports.getAllPants = async function getAllPants(){
    await client.connect();
    return client.db("Products").collection("clothing").find({Category: "Pants"}).toArray();
}

exports.getAllShirts = async function getAllShirts(){
    await client.connect();
    return client.db("Products").collection("clothing").find({Category: "Shirts"}).toArray();
}
exports.getAllShoes = async function getAllShoes(){
    await client.connect();
    return client.db("Products").collection("clothing").find({Category: "Shoes"}).toArray();
}