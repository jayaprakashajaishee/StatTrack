const express = require("express");
const userModel = require("../model/userModel");

const userRouter = express.Router();

//POST => User Register
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

//GET => User Login
userRouter.get("/login", async (req, res) => {
  try {
    const user = await userModel.findOne({
      userName: req.body.userName,
      password: req.body.password,
    });
    if (user) {
      res.json({ status: 200, code: "AUTHORIZED" }).status(200);
    } else {
      throw new Error("USER-NOT-FOUND");
    }
  } catch (error) {
    console.log(error);
    res
      .json({ status: 400, message: error.message, code: "UN-AUTHORIZED" })
      .status(400);
  }
});

module.exports = userRouter;
