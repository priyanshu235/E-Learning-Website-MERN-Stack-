import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
const app=express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb" , extended : true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended : true}));
app.use(cors());

app.get('/',(req,res)=>{res.json({message:"DATA FROM BACKEND"})})

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;
mongoose.set('strictQuery', false)

mongoose.connect(CONNECTION_URL)
    .then(()=> app.listen(PORT,() => {console.log(`Server running at port : ${PORT}`);}))
    .catch((error)=> {console.log(error);})