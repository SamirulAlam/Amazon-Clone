const functions = require('firebase-functions');
const express =require("express");
const cors =require("cors");
const { request, response } = require('express');
const stripe=require("stripe")("sk_test_51HPvU9DFg5koCdLGeOEiFvwHat4v8eMjX6SY0YCwxPBQBUPhKy1fPVhiSM5cQtgW7QBG9ydQcXnW57TDxVE2f3H000HSfmEQZF")

const app=express();

app.use(cors({origin:true}));
app.use(express.json());

app.get("/",(request,response)=>response.status(200).send("hello world"));

exports.api=functions.https.onRequest(app);