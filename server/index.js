const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const DATA_FILE = path.join(__dirname, "data.json");

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123"; // In real apps, use hashed passwords!

app.use(cors());
app.use(express.json());

let sessions = {}; // In-memory session store

// Login route
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const token = Date.now().toString(); // basic token
    sessions[token] = {
      valid: true,
      expiresAt: Date.now() + 3600000, // Token valid for 1 hour
    };

    console.log(
      `New session token created: ${token}, expires at ${new Date(
        sessions[token].expiresAt
      )}`
    );
    res.json({ success: true, token });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Auth middleware
function authenticate(req, res, next) {
  const token = req.headers.authorization;
  const session = sessions[token];
  if (session && session.valid && Date.now() < session.expiresAt) {
    return next();
  }
  //   Optimal: clean up expired sessions
  if (session && Date.now() >= session.expiresAt) {
    delete session[token];
  }
  res.status(403).json({ message: "Unauthorized or session expired" });
}

// Protected get items
app.get("/api/items", authenticate, (req, res) => {
  try {
    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    res.json(data);
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).send({ message: "Failed to read data" });
  }
});

// Protected Add item
app.post("/api/items", authenticate, (req, res) => {
  try {
    const { name, price } = req.body;
    if (!name || !price) return res.status(400).send("Missing fields");

    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    const newItem = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      name,
      price: parseFloat(price),
    };

    data.push(newItem);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json(newItem);
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).send("Failed to save data");
  }
});

app.post("/api/logout", (req, res) => {
  const token = req.headers.authorization;
  delete session[token];
  res.json({ success: true, message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
