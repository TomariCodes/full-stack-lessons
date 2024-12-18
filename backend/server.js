// const express = require('express');
import express from "express";
import dotenv from "dontenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req,res) => {
    res.send("Server is ready");
});

console.log(process.env.MONGO_URL);

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});

