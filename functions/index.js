const functions = require('firebase-functions');
const express =require("express");
const cors =require("cors");
const { request, response } = require('express');
const stripe=require("stripe")("sk_test_51HqOKFFBs76aSnifqZiDu6XqL1l8SSiqGyFNGcVELRuSHaXQFBGTLaGGfLhOHI2goM0bHQ0r3PJAn57pZGYsKuod001u3xCx43")

const app=express();

app.use(cors({origin:true}));
app.use(express.json());

app.get("/",(request,response)=>response.status(200).send("hello world"));
app.post("/payments/create",async(request,response)=>{
    const total =request.query.total;

    console.log(total);
    const paymentIntent=await stripe.paymentIntent.create({
        amount:total,
        currency:"usd"
    });
    response.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })
})

exports.api=functions.https.onRequest(app);

//(http://localhost:5001/clone-7389d/us-central1/api).