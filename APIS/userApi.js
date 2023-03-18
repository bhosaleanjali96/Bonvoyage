// create mini express app
const express = require("express");
const userApiObj = express.Router();
const expressAsyncHandler = require("express-async-handler");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userdpObj = require("./middleware/adduserImage");
const checkToken = require("./middleware/verifyToken");
const { decrypt } = require("./encryptions/encryptiondecription");
const ObjectId = require("mongodb").ObjectId;
// body parser middleware
userApiObj.use(express.json());

let userCollection;
// get usercollection object
userApiObj.use((req, res, next) => {
  userCollection = req.app.get("userCollection");
  next();
});

// profile img update
userApiObj.put(
  "/editprofilepic/:id",
  userdpObj.single("profileimage"),
  expressAsyncHandler(async (req, res) => {
    //console.log(req.params.id);
    const id = req.params.id;
    // add image Url to userObj
    let image = req.file.path;

    // get user from req.body
    await userCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { profileimage: image } }
    );

    // send Response
    res.send({ message: "Success", payload: image });
  })
);

// update profileInfo
userApiObj.put(
  "/editprofile/:id",
  checkToken,

  expressAsyncHandler(async (req, res) => {
    const id = req.params.id;

    let newUserObj = req.body;

    // get user from req.body
    await userCollection.updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          email: newUserObj.email,
          mobilenumber: newUserObj.mobilenumber,
          address: newUserObj.address,
        },
      }
    );

    // send Response
    res.send({ message: "Success", payload: newUserObj });
  })
);

// user registration
userApiObj.post(
  "/userregister",
  userdpObj.single("profileimage"),
  expressAsyncHandler(async (req, res) => {
    const newUser = JSON.parse(req.body.userObj);
    // add image Url to userObj
    if (req.file !== undefined) newUser.profileimage = req.file.path;
    else
      newUser.profileimage =
        "data:image/png;base64,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";
    // get user from req.body
    let user = await userCollection.findOne({ name: newUser.name });
    // if user existed send response as user name already existed
    if (user !== null) {
      res.send({ message: "User Name Already Existed" });
    } else {
      let hashedPassword = await bcryptjs.hash(newUser.password, 6);
      // replace plain password with hash password
      newUser.password = hashedPassword;
      // insert userObj to user Collection
      let response = await userCollection.insertOne(newUser);
      // send Response
      res.send({ message: "Success" });
    }
  })
);

// userlogin
userApiObj.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    // get user crediantials obj
    let { usercredential } = req.body;
    let userCredentialsObj = decrypt(usercredential);
    // find user by username
    let user = await userCollection.findOne({ name: userCredentialsObj.name });
    // if user is not there
    if (user === null) {
      res.send({ message: "Invalid username" });
    }
    // if user found
    else {
      // compare passwords
      let status = await bcryptjs.compare(
        userCredentialsObj.password,
        user.password
      );
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
        // send token as response
        res.send({ message: "Success", token: signedToken, user: user });
      }
    }
  })
);

// export
module.exports = userApiObj;
