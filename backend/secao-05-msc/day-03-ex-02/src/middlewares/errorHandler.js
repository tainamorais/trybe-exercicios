const errorHandler = (error, req, res, next) => {
  if (error.status) {   // erro que o desenvolvedor fez disparar
    return res.status(error.status).json({ message: error.message });
  };

  res.status(500).json({ message: error.message });
};

module.exports = errorHandler;