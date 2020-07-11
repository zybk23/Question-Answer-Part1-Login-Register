const express=require("express");
const dotenv=require("dotenv");
const routers=require("./routers/index");
const connectDatabase=require("./database/connectDatabase");
const cors=require("cors");



const app=express();



app.use(express.json());

app.use(cors());

dotenv.config({
    path:"./config/env/config.env"
});

connectDatabase();

const PORT=process.env.PORT;

app.use("/",routers);

app.listen(PORT,()=>{
    console.log(`App started on ${PORT}:${process.env.NODE_ENV}`);
});
