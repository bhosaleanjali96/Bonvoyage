const express = require("express");
const cartApiObj = express.Router();
const expressAsyncHandler = require("express-async-handler");
const checkToken = require("./middleware/verifyToken");
const ObjectId = require("mongodb").ObjectId;
// add body parser middleware
cartApiObj.use(express.json());

let cartCollection;
cartApiObj.use((req, res, next) => {
  cartCollection = req.app.get("cartCollection");
  next();
});

// get cart
cartApiObj.get("/getcart", async (req, res) => {
  let cart = await cartCollection.find().toArray();
  res.send({ message: "Success", payload: cart });
});

// add to cart
cartApiObj.post(
  "/addcart",
  checkToken,
  expressAsyncHandler(async (req, res) => {
    // get cartObj
    const cartObj = req.body;
    await cartCollection.insertOne(cartObj);
    res.send({ message: "New Item Added", payload: cartObj });
  })
);

// delete from caart
cartApiObj.delete(
  "/deletecart/:id",
  checkToken,
  expressAsyncHandler(async (req, res) => {
    await cartCollection.deleteOne({ _id: new ObjectId(req.params.id) });
    res.send({ message: "Deleted" });
  })
);

module.exports = cartApiObj;
