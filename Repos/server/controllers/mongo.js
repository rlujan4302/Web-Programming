/* B"H
*/

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://jewpaltz:<password>@cluster0.ooi3z.mongodb.net/?retryWrites=true&w=majority";
const DB_Name = process.env.Mongo_DB_Name;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {});

async function connect() {
    await client.connect();
    return client.db('amazify');
}
module.exports={
    connect, 
}