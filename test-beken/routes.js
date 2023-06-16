// routes.js
const express = require("express");
const router = express.Router();

// Import handlers
const authHandler = require("./handler.js");
const screeningHandler = require("./screeningHandler.js");

//import middleware
const authMiddleware = require("./authMiddleware.js");

// Menerapkan middleware autentikasi
router.post("/api/screenings", authMiddleware.authenticateToken, screeningHandler.createScreening);
router.get("/api/screenings", authMiddleware.authenticateToken, screeningHandler.getScreeningsByUserId);
// Routes
router.post("/api/login", authHandler.login);

// router.post("/api/login-with-google", authHandler.loginWithGoogle);
router.post("/api/register", authHandler.register);
router.post("/api/reset-password", authHandler.resetPassword);
router.post("/api/logout", authHandler.logout);

module.exports = router;
