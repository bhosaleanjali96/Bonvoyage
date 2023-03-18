const jwt = require("jsonwebtoken");
require("dotenv").config();
const checkToken = (req, res, next) => {
  // get Token
  let token = req.headers.authorization.split(" ")[1];

  // if token is not existed
  if (token === "null") {
    res.send({ message: "Unauthorized request...Please Login to Continue" });
  }
  // if token existed
  else {
    // validate the token
    jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
      // if token is expired, it returns error
      if (err) {
        res.send({ message: "Session expired, Relogin to Continue" });
      } else {
        next();
      }
    });
  }
};

module.exports = checkToken;
