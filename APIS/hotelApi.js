// create a route obj
const express = require("express");
const hotelApiObj = express.Router();
const expressAsyncHandler = require("express-async-handler");
const multerObj = require("./middleware/addProductImage");
const checkToken = require("./middleware/verifyToken");
const ObjectId = require("mongodb").ObjectId;
// add body parser middleware
hotelApiObj.use(express.json());

// get hotelCollection
let hotelCollection;
hotelApiObj.use((req, res, next) => {
  hotelCollection = req.app.get("hotelCollection");
  next();
});

// add hotel
hotelApiObj.post(
  "/addhotel",
  checkToken,
  multerObj.array("hotelImg", 5),
  expressAsyncHandler(async (req, res) => {
    // get hotelObj
    const hotelObj = JSON.parse(req.body.hotelObj);
    // add image url to hotelObj
    // hotelObj.hotelimage = req.file.path;
    var imageUrlList = [];

    for (var i = 0; i < req.files.length; i++) {
      var localFilePath = req.files[i].path;
      imageUrlList.push(localFilePath);
    }

    hotelObj.image = [...imageUrlList];

    let hotel = await hotelCollection.findOne({
      hotelname: hotelObj.hotelName,
    });
    // if hotel name already existed send res as hotelname is already existed
    if (hotel === null) {
      await hotelCollection.insertOne(hotelObj);
      res.send({ message: "New Hotel Added", payload: hotelObj });
    } else {
      res.send({ message: "Hotel Name already existed" });
    }
  })
);

//update hotel
hotelApiObj.put(
  "/edithotel/:id",
  checkToken,
  multerObj.array("hotelImg", 5),
  expressAsyncHandler(async (req, res) => {
    // get hotelObj
    const hotelObj = JSON.parse(req.body.hotelObj);

    // add image url to hotelObj
    // hotelObj.hotelimage = req.file.path;
    var imageUrlList = [];

    for (var i = 0; i < req.files.length; i++) {
      var localFilePath = req.files[i].path;
      imageUrlList.push(localFilePath);
    }

    hotelObj.image = [...imageUrlList];
    let newhotelObj = { ...hotelObj };
    delete hotelObj._id;
    const id = req.params.id;
    await hotelCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: hotelObj }
    );

    res.send({ message: "Hotel updated", payload: newhotelObj });
  })
);

//delete hotel
hotelApiObj.delete(
  "/deletehotel/:id",
  checkToken,
  expressAsyncHandler(async (req, res) => {
    await hotelCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send({ message: "Hotel deleted" });
  })
);
// get hotel
hotelApiObj.get("/gethotel", async (req, res) => {
  let hotels = await hotelCollection.find().toArray();
  res.send({ message: "Success", payload: hotels });
});

module.exports = hotelApiObj;
