import CryptoJS from "crypto-js";
export const encrypt = (Obj) => {
  return CryptoJS.AES.encrypt(
    JSON.stringify(Obj),
    process.env.REACT_APP_SECRET
  ).toString();
};

export const decrypt = (cipherText) => {
  return JSON.parse(
    CryptoJS.AES.decrypt(cipherText, process.env.REACT_APP_SECRET).toString(
      CryptoJS.enc.Utf8
    )
  );
};
