import express from 'express';
import { getPlayers } from '../controllers/playerController.js';

const router = express.Router();

router.get('/', getPlayers);

// Agrega otras rutas aquí para operaciones como crear, actualizar, eliminar jugadores.

export default router;
