const express = require("express");
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");
const auth = require("./routes/auth");
const expense = require("./routes/expenseRoutes");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());

app.use(bodyParser.json({ extended: false }));
app.use(auth);
app.use(expense);

mongoose
  .connect(process.env.MONGODB_CONNECTION_URL)
  .then((result) => {
    console.log("connected To DB");
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
