const express = require("express");
// const userModel = require("../model/userModel");

const userRouter = express.Router();

//Post Method
userRouter.post("/register", (req, res) => {
  // const newUser = new userModel({
  //   name: req.body.name,
  //   age: req.body.age,
  //   mobileNo: req.nody.mobileNo,
  //   password: req.body.password,
  //   userName: req.body.userName,
  // })
  res.send("Post API").status(200);
});

//Get all Method
userRouter.get("/login", (req, res) => {
  res.send("Get All API").status(200);
});

module.exports = userRouter;
