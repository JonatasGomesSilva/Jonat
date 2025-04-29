const errorHandler = (err, req, res, next) => {
    console.error("Erro interno:", err);
    res.status(500).json({ message: "Ocorreu um erro interno no servidor. 🚨" });
  };
  
  module.exports = errorHandler;