const express = require("express");
const authController = require("./authentication.js")
// const cors = require("cors");
// const cookieParser = require("cookie-parser");
// const routes = require("./routes");

const app = express();
app.use(authController.verifyIdToken);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port: http://localhost:${PORT}/`);
});
