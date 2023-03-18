const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const holidayApiObj = express.Router();
const multerObj = require("./middleware/adduserImage");
const checkToken = require("./middleware/verifyToken");
const ObjectId = require("mongodb").ObjectId;
//body parser middleware
holidayApiObj.use(express.json());

let holidayCollection;
//get holidayCollection  obj
holidayApiObj.use((req, res, next) => {
  holidayCollection = req.app.get("holidayCollection");

  next();
});

// add holiday
holidayApiObj.post(
  "/addholiday",
  checkToken,
  multerObj.array("holidayImg", 5),
  expressAsyncHandler(async (req, res) => {
    // get holidayObj
    const holidayObj = JSON.parse(req.body.holidayObj);

    var imageUrlList = [];

    for (var i = 0; i < req.files.length; i++) {
      var localFilePath = req.files[i].path;
      imageUrlList.push(localFilePath);
    }

    holidayObj.image = [...imageUrlList];

    await holidayCollection.insertOne(holidayObj);
    res.send({ message: "New Holiday Added", payload: holidayObj });
  })
);

// update holiday
holidayApiObj.put(
  "/editholiday/:id",
  checkToken,
  multerObj.array("holidayImg", 5),
  expressAsyncHandler(async (req, res) => {
    // get holidayObj
    const holidayObj = JSON.parse(req.body.holidayObj);
    //add image CDN Link to holidayObj
    var imageUrlList = [];

    for (var i = 0; i < req.files.length; i++) {
      var localFilePath = req.files[i].path;
      imageUrlList.push(localFilePath);
    }

    holidayObj.image = [...imageUrlList];

    let newHolidayObj = { ...holidayObj };
    delete holidayObj._id;
    const id = req.params.id;
    await holidayCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: holidayObj }
    );
    res.send({ message: "Holiday Updated", payload: newHolidayObj });
  })
);

//update profile pic

// delete HOLIDAY
holidayApiObj.delete(
  "/deleteholiday/:id",
  checkToken,
  expressAsyncHandler(async (req, res) => {
    await holidayCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send({ message: "Holiday deleted" });
  })
);

// get holiday
holidayApiObj.get("/getholiday", async (req, res) => {
  let holidaypackage = await holidayCollection.find().toArray();
  res.send({ message: "Success", payload: holidaypackage });
});

module.exports = holidayApiObj;
