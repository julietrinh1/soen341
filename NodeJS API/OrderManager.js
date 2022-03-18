require('dotenv').config();
const { MongoClient } = require('mongodb');
const client = new MongoClient("mongodb+srv://M_Afandi:Syna2462@soen341.vaay8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
var ObjectId = require('mongodb').ObjectId;

exports.createOrder = async function createOrder(order){
    await client.connect();
    return client.db("Orders").collection("Orders").insertOne(order);
}

exports.viewUserOrders = async function viewUserOrders(user){
    await client.connect();
    return client.db("Orders").collection("Orders").find({email: user.email}).toArray();
}

exports.deleteOrder = async function deleteOrder(id){
    await client.connect();
    return client.db("Orders").collection("Orders").deleteOne({"_id": ObjectId(id)});
}