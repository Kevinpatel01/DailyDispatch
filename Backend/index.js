const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const user = require("./Register");
const e = require("express");
const { Await } = require("react-router-dom");
const url =
  "mongodb+srv://News:QQ7aQu1NAFn0AdTb@cluster0.5kq4691.mongodb.net/?retryWrites=true&w=majority";

const app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to mongoose");
  })
  .catch((e) => {
    console.log("error");
  });

app.listen(3002, () => {
  console.log("BE started on port 3002");
});

app.post("/Register", async (req, res) => {
  const { username, email, password } = req.body;

  const User = new user({
    username,
    email,
    password,
  });
  const mail = await user.findOne({ email });
  if (!mail) {
    User.save()
      .then(() => {
        res.json({success: true, message: 'User Registered Successfully'})
        console.log("User Added");
      })
      .catch((e) => {
        console.log("Error adding a user", e);
      });
  } else {
    res.json({success: false, message: 'User Already Registered!!'})
    console.log("user already exists.");
  }
});

app.post("/Login", async (req, res) => {
  const { email, password } = req.body;
  const User = await user.findOne({ email });

  if (!User) {
    console.log(res.msg);
    return res.status(404).json({ msg: "Data not found" });
  }

  if (password === User.password) {
    console.log("validPassword");
    return res.status(200).json({ msg: "Logged in sucessfully" });
  } else {
    console.log(res.msg);
    console.log("Invalid");
    return res.status(500).json({ msg: "Invalid credentials" });
  }
});

app.post("/Profile", async (req, res) => {
  const { username } = req.body;

  try {
    const User = await user.findOne({ username });
    res.json(username);
  } catch (e) {}
});
