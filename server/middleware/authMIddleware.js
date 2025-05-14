const sessions = {};

function createSession() {
  const token = Date.now().toString(); // basic token
  sessions[token] = {
    valid: true,
    expiresAt: Date.now() + 3600000, // Token valid for 1 hour
  };
  return token;
}

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  const session = sessions[token];
  if (session && session.valid && Date.now() < session.expiresAt) {
    return next();
  }

  if (session && Date.now() >= session.expiresAt) {
    delete sessions[token];
  }

  return res.status(403).json({ message: "Unauthorized or Session Expired!" });
}

function destroySession(token) {
  delete sessions[token];
}

module.exports = {
  createSession,
  authenticate,
  destroySession,
};
