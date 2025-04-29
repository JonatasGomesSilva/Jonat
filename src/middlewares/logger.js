const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // Continua o fluxo da requisição
  };
  
  module.exports = loggerMiddleware;