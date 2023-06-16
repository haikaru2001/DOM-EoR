const express = require("express");
const app = express();
const routes = require("./routes");
// const firebase = require("firebase");
// const firebaseConfig = require("./firebaseConfig");
// const { OAuth2Client } = require("google-auth-library");
// const client = new OAuth2Client(ei69uiepjl0du8t87091lmmgu8k22rjh.apps.googleusercontent.com); // Ganti YOUR_CLIENT_ID dengan Client ID OAuth Google Anda

// Inisialisasi Firebase
// firebase.initializeApp(firebaseConfig);

// Middleware
app.use(express.json());
app.use("/", routes);
// // Rute untuk registrasi pengguna baru
// app.post("/api/register", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
//     res.json({ message: "Registrasi berhasil", user: userCredential.user });
//     const userIdRegis = userCredential.user.uid;
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// // Rute untuk login pengguna
// app.post("/api/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
//     res.json({ message: "Login berhasil", user: userCredential.user });

//     const userIdLogin = userCredential.user.uid;
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Rute untuk otentikasi dengan Google
// app.post("/api/google-login", async (req, res) => {
//   try {
//     const { token } = req.body;
//     const ticket = await client.verifyIdToken({
//       idToken: token,
//       audience: YOUR_CLIENT_ID, // Ganti YOUR_CLIENT_ID dengan Client ID OAuth Google Anda
//     });
//     const { email, name } = ticket.getPayload();
//     const userCredential = await firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(token));
//     res.json({ message: "Login dengan Google berhasil", user: userCredential.user });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// app.post("/api/reset-password", async (req, res) => {
//   try {
//     const { email } = req.body;
//     await firebase.auth().sendPasswordResetEmail(email);
//     res.json({ message: "Email pengaturan ulang password telah dikirim" });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// Jalankan server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan pada http://localhost:${port}`);
});
