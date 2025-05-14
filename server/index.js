const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 5000;

const DATA_FILE = path.join(__dirname, "jobOpen.json");

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

  if (session && Date.now() >= session.expiresAt) {
    delete sessions[token]; // ✅ correct deletion
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
    const { position, department, qualifications, locations, status } =
      req.body;
    if (!position || !department || !qualifications || !locations)
      return res.status(400).send("Missing fields");

    const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
    const newItem = {
      id: data.length ? data[data.length - 1].id + 1 : 1,
      position,
      department,
      qualifications,
      locations,
      status,
    };

    data.push(newItem);
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
    res.status(201).json(newItem);
  } catch (err) {
    console.error("POST error:", err);
    res.status(500).send("Failed to save data");
  }
});

// Delete item by ID
app.delete("/api/items/:id", authenticate, (req, res) => {
  const id = parseInt(req.params.id);
  console.log("Deleting item with id:", id); // <-- add this
  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const filtered = data.filter((item) => item.id !== id);

  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));
  res.json({ success: true });
});

// PUT (update) item by ID
app.put("/api/items/:id", authenticate, (req, res) => {
  const id = parseInt(req.params.id);
  const { position, department, qualifications, locations, status } = req.body;

  const data = JSON.parse(fs.readFileSync(DATA_FILE, "utf-8"));
  const index = data.findIndex((item) => item.id === id);

  if (index === -1) return res.status(404).send("Item not found");

  console.log(`Updating item ${id} to`, {
    position,
    department,
    qualifications,
    locations,
    status,
  });

  data[index] = {
    ...data[index],
    position,
    department,
    qualifications,
    locations,
    status,
  };
  console.log(data[index]);
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
  res.json(data[index]);
});

// ✅ Fix logout handler
app.post("/api/logout", (req, res) => {
  const token = req.headers.authorization;
  delete sessions[token]; // ✅ use correct object name
  res.json({ success: true, message: "Logged out" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
