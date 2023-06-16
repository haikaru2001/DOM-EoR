const { auth } = require("./config.js");

async function verifyIdToken(req, res, next) {
  let idToken = req.headers.idtoken;

  return auth
    .verifyIdToken(idToken)
    .then((decodedToken) => {
      const uid = decodedToken.uid;
      console.log("decoded token", decodedToken);
      next();
    })
    .catch((error) => {
      console.log("Decoded token error", error);
      next();
    });
}

module.exports.verifyIdToken = verifyIdToken;
