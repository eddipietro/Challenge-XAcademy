import express from 'express';
import Player from '../models/player.js'; 
import { importCSVData } from '../utils/csvImport.js'; 

const router = express.Router();


router.post('/load-players', async (req, res) => {
    try {
      
        const filePath = req.body.filePath; 

      
        const playersData = await importCSVData(filePath);

        
        const playerPromises = playersData.map(async (player) => {
            return await Player.create({
                name: player.name,
                age: player.age, 
                position: player.position, 
               
            });
        });

        
        await Promise.all(playerPromises);

        res.status(201).json({ message: 'Players loaded successfully!' });
    } catch (error) {
        console.error('Error loading players:', error);
        res.status(500).json({ error: 'An error occurred while loading players.' });
    }
});

export default router;
