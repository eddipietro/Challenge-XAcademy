import express from 'express';
import playerController from '../controllers/playerController.js';

const router = express.Router();

router.get('/players', playerController.getPlayers);
router.post('/players', playerController.createPlayer);
router.put('/players/:id', playerController.updatePlayer);
router.delete('/players/:id', playerController.deletePlayer);

export default router;
