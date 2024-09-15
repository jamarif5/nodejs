

const {MongoClient}=require('mongodb')
const url= 'mongodb://localhost:27017'
const client = new MongoClient(url);
 async function getdata() {
  let result=  await client.connect()
   let db =result.db('e-com')
   let collection = db.collection('products')
   let respond = await collection.find({}).toArray()
   console.log(respond);
   
}
getdata()