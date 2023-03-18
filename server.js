//create express app
const express = require("express");
const app = express();

// configure dotenv
require("dotenv").config();

//import path module
const path = require("path");

//connect build of react app with express
app.use(express.static(path.join(__dirname, "./build")));

// import API Objects
const userApiObj = require("./APIS/userApi");
const hotelOwnerApiObj = require("./APIS/hotelOwnerApi");
const adminApiObj = require("./APIS/adminApi");
const hotelApiObj = require("./APIS/hotelApi");
const flightApiObj = require("./APIS/flightApi");
const holidayApiObj = require("./APIS/holidayApi");
const cartApiObj = require("./APIS/cartApi");

// use API `based on the starting of url
// eg:use userApiObj when path starts with /user
app.use("/users", userApiObj);
app.use("/hotelowner", hotelOwnerApiObj);
app.use("/admin", adminApiObj);
app.use("/hotel", hotelApiObj);
app.use("/flight", flightApiObj);
app.use("/holiday", holidayApiObj);
app.use("/cart", cartApiObj);

// special Route
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./build", "index.html"));
});

// import mongodb module
const mongoClient = require("mongodb").MongoClient;

// get database URL
const DATABASE_URL = process.env.DATABASE_URL;

// connect
mongoClient.connect(DATABASE_URL, (err, client) => {
  if (err) {
    console.log("err in db connect", err);
  } else {
    // get obj of database
    let databaseObject = client.db("bonvoyage");
    // get obj of collection
    let userCollection = databaseObject.collection("usercollections");
    let hotelOwnerCollection = databaseObject.collection(
      "hotelownercollections"
    );
    let adminCollection = databaseObject.collection("admincollections");
    let hotelCollection = databaseObject.collection("hotelcollections");
    let flightCollection = databaseObject.collection("flightcollections");
    let holidayCollection = databaseObject.collection("holidaycollections");
    let cartCollection = databaseObject.collection("cartcollections");
    // set to app project
    app.set("userCollection", userCollection);
    app.set("hotelOwnerCollection", hotelOwnerCollection);
    app.set("adminCollection", adminCollection);
    app.set("hotelCollection", hotelCollection);
    app.set("flightCollection", flightCollection);
    app.set("holidayCollection", holidayCollection);
    app.set("cartCollection", cartCollection);
    console.log("Yahooo..!DB Connection Success");
  }
});

// error handling middleware
app.use((err, req, res, next) => {
  console.log(err);
  res.send({ message: "Error Occured", reason: err.message });
});

//assign port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server running on port ${PORT}`));
