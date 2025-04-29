const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Acesso negado! Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), "seuSegredoSuperSeguro");
    req.user = decoded;
    next(); // Continua para a próxima função
  } catch (error) {
    res.status(403).json({ message: "Token inválido!" });
  }
};

module.exports = authMiddleware;