const express = require("express");
const connectDB = require("./mongodb/db");
require('dotenv').config()
const route = require("./Routing/routes");

require("dotenv").config();

const port = 4000;
const app = express();


app.use(express.json());


app.use("/", route);

const startConnection = async () => {
  try {
    await connectDB(process.env.mongo_url);
    app.listen(port, () => {
      console.log("Server is Runing on"+port);
    });
  } catch (err) {
    console.log(`Database is showing Error`);
  }
};

startConnection();
