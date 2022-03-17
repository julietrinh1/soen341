require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb+srv://M_Afandi:Syna2462@soen341.vaay8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

exports.getAllUsers = async function getAllUsers(){
    await client.connect();
    return client.db("UserDB").collection("Users").find().toArray();
}

exports.getUserByEmail = async function getUserByEmail(email){
    await client.connect();
    return await client.db("UserDB").collection("Users").findOne({email:email});
}

exports.createUser = async function createUser(user){
    await client.connect();
    await client.db("UserDB").collection("Users").insertOne(user);
    return user;
}
