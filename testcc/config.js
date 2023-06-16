const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const routes = require("./routes");
const admin = require("firebase-admin");
const credentials = require("./dom-eor-firebase-adminsdk-2l43k-f07a9ad534.json");
const app = express();

admin.initializeApp({
  credential: admin.credential.cert(credentials),
});

exports.auth = admin.auth();
