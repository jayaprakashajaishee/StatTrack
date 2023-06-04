const express = require("express");
const userModel = require("../model/userModel");

const userRouter = express.Router();

//Post Method
userRouter.post("/register", async (req, res) => {
  const newUser = new userModel({
    name: req.body.name,
    age: req.body.age,
    mobileNo: req.body.mobileNo,
    password: req.body.password,
    userName: req.body.userName,
    created: new Date(),
  });
  try {
    const dataToSave = await newUser.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ status: 400, message: error.message, code: error.code });
  }
});

//Get all Method
userRouter.get("/login", (req, res) => {
  res.send("Get All API").status(200);
});

module.exports = userRouter;
