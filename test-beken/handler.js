// authHandler.js
const firebase = require("firebase/app");
require("firebase/auth");
// login with google
// const { OAuth2Client } = require("google-auth-library");

// Inisialisasi Firebase
const firebaseConfig = require("./firebaseConfig");
firebase.initializeApp(firebaseConfig);
// const client = new OAuth2Client("1021022335136-ei69uiepjl0du8t87091lmmgu8k22rjh.apps.googleusercontent.com");

// inisialisasi SQL
const sqlConnect = require("./sqlConfig.js");

// inisialisasi jwt
const jwt = require("jsonwebtoken");

// Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
    const userId = userCredential.user.uid;
    const token = generateToken(userId);
    res.cookie("jwt", token, { httpOnly: false, maxAge: 10800 * 1000 });
    const response = res.status(200).json({
      message: "Logged in!",
      user_id: userId,
    });
    return response;
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
    res.json({ message: "Registrasi berhasil", user: userCredential.user });
    // Dapatkan ID pengguna dari hasil pendaftaran
    const userId = userCredential.user.uid;

    // Simpan userId ke database MySQL
    sqlConnect.query("INSERT INTO users (userId, email) VALUES (?, ?)", [userId, email], (error, results) => {
      if (error) {
        throw error;
      }
      //   res.json({ message: "Pendaftaran berhasil", userId });
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Reset Password
exports.resetPassword = async (req, res) => {
  try {
    const { email } = req.body;
    await firebase.auth().sendPasswordResetEmail(email);
    res.json({ message: "Email pengaturan ulang password telah dikirim" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    await firebase.auth().signOut();
    res.json({ message: "Logout berhasil" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Fungsi untuk menghasilkan token JWT
function generateToken(userId) {
  // Menentukan payload yang akan disimpan dalam token
  const payload = {
    userId: userId,
    // Tambahkan data lain yang ingin Anda sertakan dalam token, jika ada
  };

  // Membuat token JWT dengan menggunakan kunci rahasia
  const token = jwt.sign(payload, "secret_key", { expiresIn: "3h" });

  return token;
}

// Login dengan Google
// exports.loginWithGoogle = async (req, res) => {
//   try {
//     const { idToken } = req.body;

//     // Verifikasi token Google
//     const ticket = await client.verifyIdToken({
//       idToken,
//       audience: "1021022335136-ei69uiepjl0du8t87091lmmgu8k22rjh.apps.googleusercontent.com", // Ganti dengan Client ID OAuth Google Anda
//     });

//     // Dapatkan informasi pengguna
//     const { email, sub } = ticket.getPayload();

//     // Login atau daftarkan pengguna menggunakan email
//     const userCredential = await firebase.auth().signInWithEmailAndPassword(email, "password");

//     // Dapatkan ID pengguna dari hasil login atau pendaftaran
//     const userId = userCredential.user.uid;

//     res.json({ message: "Login dengan Google berhasil", userId });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };
