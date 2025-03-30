const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const jwtRoute = require("./routes/jwt.js");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const corsOptions = { origin: true, Credential: true };

app.get("/", (req, res) => {
  res.send("Welcome to IEEE Jagannath University API");
});

const connection = async () => {
  try {
    // await mongoose.connect(`${process.env.DB_URI_LOCAL}`, {});
    await mongoose.connect(`${process.env.DB_URI}`, {});
    console.log("connected");
  } catch (err) {
    console.log("Error: ", err);
  }
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1", jwtRoute);

app.listen(port, () => {
  connection();
  console.log(`Server is running at ${port}`);
});
