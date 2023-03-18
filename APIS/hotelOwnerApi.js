// create mini express app
const express = require("express");
const hotelOwnerApiObj = express.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { decrypt } = require("./encryptions/encryptiondecription");

// body parser middleware
hotelOwnerApiObj.use(express.json());

let hotelOwnerCollection;
// get hotelownercollection Object
hotelOwnerApiObj.use((req, res, next) => {
  hotelOwnerCollection = req.app.get("hotelOwnerCollection");
  next();
});

// hotel owner registration
hotelOwnerApiObj.post(
  "/hotelownerregister",
  expressAsyncHandler(async (req, res) => {
    const newHotelOwner = req.body;
    let hotelOwner = await hotelOwnerCollection.findOne({
      email: newHotelOwner.email,
    });
    if (hotelOwner !== null) {
      res.send({ message: "Email id should be unique..!" });
    } else {
      // hash password
      let hashedPassword = await bcryptjs.hash(newHotelOwner.password, 6);
      // replace plain password to hashed password
      newHotelOwner.password = hashedPassword;
      // insert userObj to userCollection
      await hotelOwnerCollection.insertOne(newHotelOwner);
      //   send res
      res.send({ message: "Success" });
    }
  })
);

// hotel owner login
hotelOwnerApiObj.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    // get hotelowner credientials obj
    let { usercredential } = req.body;
    let hotelOwnerCredentialsobj = decrypt(usercredential);
    // find user by emailname
    let user = await hotelOwnerCollection.findOne({
      ownername: hotelOwnerCredentialsobj.name,
    });
    // if user is not there
    if (user === null) {
      res.send({ message: "Invalid username" });
    }
    // if user found
    else {
      // compare passwords
      let status = await bcryptjs.compare(
        hotelOwnerCredentialsobj.password,
        user.password
      );
      // if not equal
      if (status === false) {
        res.send({ message: "Invalid Password" });
      }
      // if status is true
      else {
        let signedToken = await jwt.sign(
          { ownername: user.ownername },
          process.env.SECRET,
          { expiresIn: "1h" }
        );
        // send token as Res
        res.send({ message: "Success", token: signedToken, user: user });
      }
    }
  })
);

module.exports = hotelOwnerApiObj;
