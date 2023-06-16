const mysql = require("mysql");

// Membuat koneksi ke database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dom_eor",
});

// Membuka koneksi
connection.connect((err) => {
  if (err) throw err;
  console.log("Terhubung ke database MySQL");
});

module.exports = connection;
