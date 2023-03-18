const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const flightApiObj = express.Router();
const multerObj = require("./middleware/adduserImage");
const checkToken = require("./middleware/verifyToken");
const ObjectId = require("mongodb").ObjectId;
//body parser middleware
flightApiObj.use(express.json());

let flightCollection;
//get productCollection obj
flightApiObj.use((req, res, next) => {
  flightCollection = req.app.get("flightCollection");

  next();
});

//add product
flightApiObj.post(
  "/addflight",
  checkToken,
  multerObj.single("flogo"),
  expressAsyncHandler(async (req, res) => {
    //get flightObj
    const flightObj = JSON.parse(req.body.flightObj);
    //add image CDN Link to productObj
    flightObj.image = req.file.path;
    //save to productCollection
    await flightCollection.insertOne(flightObj);
    //send res
    res.send({ message: "New flight created", payload: flightObj });
  })
);

//update flight
flightApiObj.put(
  "/editflight/:id",
  checkToken,
  multerObj.single("flogo"),

  expressAsyncHandler(async (req, res) => {
    // get flightObj
    const flightObj = JSON.parse(req.body.flightObj);

    let newflightObj = { ...flightObj };
    delete flightObj._id;
    const id = req.params.id;
    await flightCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: flightObj }
    );

    res.send({ message: "Flight updated", payload: newflightObj });
  })
);

//delete hotel
flightApiObj.delete(
  "/deleteflight/:id",
  checkToken,
  expressAsyncHandler(async (req, res) => {
    await flightCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send({ message: "Flight deleted" });
  })
);
// get flight
flightApiObj.get("/getflight", async (req, res) => {
  let flights = await flightCollection.find().toArray();
  res.send({ message: "Success", payload: flights });
});

module.exports = flightApiObj;
