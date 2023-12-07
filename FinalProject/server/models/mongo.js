const { MongoClient, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;
const DB_NAME = process.env.MONGO_DB_NAME;
const client = new MongoClient(uri, {});

async function connect(){
        await client.connect();
        return client.db(DB_NAME);
}

module.exports = {
    connect, ObjectId
};