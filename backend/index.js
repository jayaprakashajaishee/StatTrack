require("dotenv").config();
const express = require("express");
const app = express();
app.use((req, res, next) => {
  const now = new Date();
  console.log(
    `${req.url} ==> ${now.toLocaleDateString(
      "en-us"
    )}-${now.getHours()}-${now.getMinutes()}`
  );
  next();
});

const port = process.env.PORT;
console.log(port);

app.use(express.json());

app.get("/", (req, res) => {
  res.send("server running - statTrack");
});

app.listen(4321, () =>
  console.log(`App listening to http://localhost:${port}`)
);
