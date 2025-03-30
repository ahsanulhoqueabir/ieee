const cors = require("cors");
const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const jwtRoute = require("../routes/jwt.js");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
const corsOptions = { origin: true, Credential: true };

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to IEEE Jagannath University API.");
});
// /.netlify/functions/api
app.use("/.netlify/functions/api", router);

const dburi = process.env.DB_URI;
mongoose
  .connect(dburi)
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("Error: ", err);
  });
app.use(express.json());
app.use(cors(corsOptions));
app.use("/.netlify/functions/api/v1", jwtRoute);

module.exports.handler = serverless(app);

//     app.listen(port, () => {
//   connection();
//   console.log(`Server is running at ${port}`);
// });
