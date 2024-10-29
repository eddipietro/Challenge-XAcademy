export const autenticar = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
      return res.status(401).json({ error: 'Acceso no autorizado' });
    }
    // Validar el token aquí si tienes JWT u otro método
    next();
  };
  