require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT;
const mongooseURI = process.env.MONGO_URI;

mongoose.connect(mongooseURI);
const database = mongoose.connection;

database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//log route middleware
app.use((req, res, next) => {
  const now = new Date();
  console.log(
    `${req.url} ==> ${now.toLocaleDateString(
      "en-us"
    )}-${now.getHours()}-${now.getMinutes()}`
  );
  next();
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running - statTrack");
});

app.listen(4321, () =>
  console.log(`App listening to http://localhost:${port}`)
);
