const sessions = {};

function createSession() {
  const token = Date.now().toString(); // basic token
  const expiresAt = Date.now() + 60 * 60 * 1000; // Token valid for 1 hour
  sessions[token] = {
    valid: true,
    expiresAt,
  };
  return { token, expiresAt };
}

function authenticate(req, res, next) {
  const token = req.headers.authorization;
  const session = sessions[token];

  console.log("Token received:", token);
  console.log("Session found:", session);

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
  sessions, //  export sessions in case needed elsewhere
};
