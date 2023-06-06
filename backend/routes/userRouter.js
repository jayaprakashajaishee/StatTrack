const express = require("express");
const userModel = require("../model/userModel");
const jwt = require("jsonwebtoken");
const authenticate = require("../middleware/authenticate");

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
    const _newUser = await newUser.save();
    const userCreds = {
      userName: req.body.userName,
      password: req.body.password,
    };
    const accessToken = jwt.sign(userCreds, process.env.ACCESS_TOKEN_SECRET);
    res
      .status(200)
      .json({ _newUser, status: 200, message: "REGISTERED", accessToken });
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
    const userCreds = {
      userName: req.body.userName,
      password: req.body.password,
    };
    const user = await userModel.findOne(userCreds);
    if (user !== null) {
      const accessToken = jwt.sign(userCreds, process.env.ACCESS_TOKEN_SECRET);
      res.json({ status: 200, accessToken, code: "AUTHORIZED" }).status(200);
    } else {
      res.json({ status: 400, code: "UN_AUTHORIZED" }).status(200);
    }
  } catch (error) {
    console.log(error);
    res
      .json({ status: 400, message: error.message, code: "UN-AUTHORIZED" })
      .status(400);
  }
});

userRouter.get("/test", authenticate, (req, res) => {
  res.status(200).json({ status: 200, message: "test route" });
});

module.exports = userRouter;
