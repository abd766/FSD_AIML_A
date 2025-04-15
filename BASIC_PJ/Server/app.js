const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db")
const userRoutes = require("./Routes/userRoute");
dotenv.config();

const app = express();
const Port = process.env.PORT || 3000;
connectDB();
app.use(express.json());
app.use("/",userRoutes);
app.listen(Port, () =>{
    console.log(`Console satrted at port : ${Port} `);
})
