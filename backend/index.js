require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routes/userRouter");
const app = express();

const port = process.env.PORT;
const mongooseURI = process.env.MONGO_URI;

mongoose.connect(mongooseURI);
const database = mongoose.connection;

app.use(express.json());

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

app.get("/", (req, res) => {
  res.send("server running - statTrack");
});

app.use("/user", userRouter);

app.listen(4321, () =>
  console.log(`App listening to http://localhost:${port}`)
);
