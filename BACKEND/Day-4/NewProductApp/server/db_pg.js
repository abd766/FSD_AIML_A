const {Client} = require("pg")
require('dotenv').config();
pwd= process.env.DB_PWD;
const client = new Client({
    host:'localhost',
    port:5432,
    database:'postgres',
    user: 'postgres',
    password:pwd
});
client.connect()
.then(()=>{
    console.log("PostgresDB connected.")
})
.catch((err)=>{
    console.log("DB_Error:",err.messsage)
})
client.query("select * from users1",(err,res)=>{
    if(err){
        console.log("Query Error:",err.message);
    }else{
        console.log("Data:",res.rows);
    }
})