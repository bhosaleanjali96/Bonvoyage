// import cloudinary V2
const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
require("dotenv").config();

// configure cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// configure cloudinarystorage
const clStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    return {
      folder: "Hotel Images",
      public_key: file.fieldname + "-" + Date.now(),
    };
  },
});

// configure multer
const hotelImgObj = multer({ storage: clStorage });

// export
module.exports = hotelImgObj;
