const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);


const dbName = 'myproject';

async function db() {
 
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('documents');
  const data = await collection.insertOne({name:"gulzar",cls:"nodejs",add:"roon"})
 //console.log(data)
 

  return collection;
}
module.exports=db;