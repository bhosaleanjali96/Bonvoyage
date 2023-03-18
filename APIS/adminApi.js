// create mini express app
const express = require("express");
const adminApiObj = express.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { decrypt } = require("./encryptions/encryptiondecription");

// body parser middleware
adminApiObj.use(express.json());

let adminCollection;
// get admincollection Object
adminApiObj.use((req, res, next) => {
  adminCollection = req.app.get("adminCollection");
  next();
});

// admin login
adminApiObj.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    // get admin credientials obj
    let { usercredential } = req.body;
    let adminCredentialsObj = decrypt(usercredential);
    // find user by username
    let user = await adminCollection.findOne({
      name: adminCredentialsObj.name,
    });

    // is user is not there
    if (user === null) {
      res.send({ message: "Invalid username" });
    }
    // if user found
    else {
      // compare passwords
      let status = adminCredentialsObj.password === user.password;
      // if not equal
      if (status === false) {
        res.send({ message: "Invalid Password" });
      }
      // if status is true
      else {
        // create and send token
        let signedToken = await jwt.sign(
          { name: user.name },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        // send token as Res
        res.send({ message: "Success", token: signedToken, user: user });
      }
    }
  })
);

module.exports = adminApiObj;
