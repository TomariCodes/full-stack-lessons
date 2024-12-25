// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import Product from "./models/product.model.js"

dotenv.config();

const app = express();

app.use(express.json()); // allows us ro accept JSON data in the req.body

app.post("/api/products", async (req, res) => {
  const product = req.body; // user will send this data 

  if(!product.name || !product.price || !product.image) {
     return res.status(400).json({ success:false, message: "please provide all fields" });
  }

  const newProduct = new Product(product);

  try { 
    await newProduct.save();
    res.status(201).json({success:true, data: newProduct });
  } catch (error) {
    console.log("error in Create product:", error.message);
    res.status(500).json({success:false, message: "Server Error"});
  }
});

/*
app.get("/products", async (req, res) => {
  try {
  const products = await Product.find();
  res.status(200).json({success: true, data: products});
  } catch (error) {
    console.error("Error in fetch products", error.message);
    res.status(500).json({success: false, message: "Server Error" });
    }
    });
    
    */

app.listen(5000, () => {
  connectDB();
  console.log("Server started at http://localhost:5000");
});
