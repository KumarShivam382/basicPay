const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(403).json({});
  }

  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    if (!decoded) throw new Error("Invalid token");
    const userId = decoded.userId;
    req.userId = userId;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
module.exports = { authMiddleware };
