const {MongoClient} = require("mongodb")
require('dotenv').config();
url = process.env.DB_URL;
// MongoClient.connect(url)
// .then(client=>{
//     console.log("MongoDB Connected")
// })
// .catch((err)=>{
//     console.log("Error Occured")
// })
// (async()=> {
//     try{
//         await MongoClient.connect(url);
//         console.log("Mongodb connected")
//     }catch(err){
//         console.log("Error occured")
//     }
// })();

//mongo client driver

const Mongo_URL=process.env.DB_URL;
const db_name="FSD-CSE-AIML";
const db_connect=async()=>{
    const client=new MongoClient(Mongo_URL);
    try{
        await client.connect(Mongo_URL);
        console.log("db connected");
        const db=client.db(db_name);
        const usercol=db.collection("users");
        const res=await usercol.find().toArray();
        console.log("Data:", res);
    }
    catch(err){
        console.log("db error",err.message);
        
    }
}
db_connect();

// MongoClient.connect(Mongo_URL)
// .then(client=>{
//     console.log("MONGODB Connected");
//     const db=client.db(db_name);
//     const user_col=db.collection("users");
//     const res=user_col.find().toArray();
//     console.log("Users",res);
    
// })
// .catch((err)=>{
//     console.log("DB Error",err.message);
// })


//iefee but correct this
// (async()=>{
//     try{
//         await MongoClient.connect(Mongo_URL);
//         console.log("DB Connected");
//     }
//     catch(err){
//         console.log("DB Error",err.message);
//     }
// })();