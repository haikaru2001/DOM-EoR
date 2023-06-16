// authMiddleware.js
const jwt = require("jsonwebtoken");

// Middleware untuk memverifikasi token JWT
exports.authenticateToken = (req, res, next) => {
  // Mendapatkan token dari header Authorization
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  // Jika token tidak ada
  if (!token) {
    return res.status(401).json({ message: "Token tidak tersedia" });
  }

  // Verifikasi token JWT
  jwt.verify(token, "secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token tidak valid" });
    }

    // Menyimpan objek pengguna terautentikasi ke dalam objek permintaan (req)
    req.user = user;

    // Lanjutkan eksekusi ke handler berikutnya
    next();
  });
};
