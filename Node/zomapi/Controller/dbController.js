let mongo = require('mongodb');
let {MongoClient} = require('mongodb');
let mongoUrl = "mongodb://127.0.0.1:27017";
let client = new MongoClient(mongoUrl);

async function dbConnect(){
    await client.connect();
}

let db = client.db('restaurants');

async function getData(colName,query){
    let output = [];
    try{
        const cursor = db.collection(colName).find(query);
        for await(const data of cursor){
            output.push(data)
        }
        cursor.closed
    }catch(err){
        output.push({"Error":"Error in getting data"})
    }
    return output
}


module.exports = {
    dbConnect,
    getData
}