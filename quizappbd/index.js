const express = require('express');
const cors = require('cors');
const db = require('./db');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const sendPasswordEmail = require('./mailer');

const app = express();

// 🔹 Create uploads folder if it doesn't exist
if (!fs.existsSync('./uploads')) {
  fs.mkdirSync('./uploads');
}

// 🔹 Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// 🔹 Multer Storage Config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  },
});

// 🔹 Multer Upload Middleware
const upload = multer({
  storage: storage,
  limits: { fileSize: 500 * 1024 }, // 500KB limit
}).fields([
  { name: 'profilePicture', maxCount: 1 },
  { name: 'collegeIdCard', maxCount: 1 }
]);

// 🔹 Root Route
app.get('/', (req, res) => {
  res.send('🎉 Backend API is running...');
});

// 🔹 Get All Users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err.message);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
});

// 🔹 Register Route
app.post('/register', upload, (req, res) => {
  try {
    const { fullName, email, phone, collegeName, collegeId } = req.body;
    const profilePic = req.files['profilePicture']?.[0]?.filename;
    const collegeIdCard = req.files['collegeIdCard']?.[0]?.filename;

    if (!profilePic || !collegeIdCard) {
      return res.status(400).json({ error: 'Missing file upload' });
    }

    const password = Math.random().toString(36).substring(2, 10); // Random password

    const sql = `
      INSERT INTO users 
      (full_name, email, phone, college_name, college_id_number, profile_picture, college_id_card, password_hash) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      fullName,
      email,
      phone,
      collegeName,
      collegeId,
      profilePic,
      collegeIdCard,
      password
    ];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('❌ Registration Error:', err.message);
        return res.status(500).json({ error: 'Database error during registration' });
      }
      res.status(200).json({ message: 'User registered successfully!' });
    });
  } catch (error) {
    console.error('❌ Server Error:', error.message);
    res.status(500).json({ error: 'Server error during registration' });
  }
});

// 🔹 Start Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:5000`);
});
