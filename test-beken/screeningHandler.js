// screeningHandler.js
const express = require("express");
// const router = express.Router();
// const authMiddleware = require("./authMiddleware");
// const { createScreening } = require("./screeningHandler");

const connection = require("./sqlConfig");

// Create Screening
exports.createScreening = (req, res) => {
  const { location, density, viscosity, oilsaturation, formationtype, thickness, permeability, depth, temperature, outputtype, eorprocess } = req.body;

  const userid = req.user.userId; // Mendapatkan userId dari pengguna yang sudah login

  const screeningData = {
    userid,
    location,
    density,
    viscosity,
    oilsaturation,
    formationtype,
    thickness,
    permeability,
    depth,
    temperature,
    outputtype,
    eorprocess,
  };

  // Simpan data screening ke dalam tabel screenings di database MySQL
  connection.query("INSERT INTO screening SET ?", screeningData, (error, results) => {
    if (error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(200).json({ message: "Data screening berhasil disimpan" });
    }
  });
};

exports.getScreeningsByUserId = (req, res) => {
  const userid = req.user.userId;

  const query = "SELECT * FROM screening WHERE userid = ?";

  connection.query(query, [userid], (error, results) => {
    if (error) {
      console.error("Error:", error);
      res.status(500).json({ error: error.message });
    } else {
      res.json(userId);
    }
  });
};
