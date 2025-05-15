const {
  createSession,
  destroySession,
} = require("../middleware/authMiddleware");

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "123";

exports.login = (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const { token, expiresAt } = createSession();
    // const expiresAt = sessions[token].expiresAt; // ⬅️ get it from session memory
    res.json({ success: true, token, expiresAt });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
};

exports.logout = (req, res) => {
  const token = req.headers.authorization;
  destroySession(token);
  res.json({ success: true, message: "Logged out" });
};
