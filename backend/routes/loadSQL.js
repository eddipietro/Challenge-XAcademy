import express from 'express';
import { importSQLData } from '../utils/sqlImport.js'; 

const router = express.Router();


router.post('/load-sql', async (req, res) => {
    try {
        const result = await importSQLData(); 
        res.status(200).json({ message: 'Datos importados exitosamente', result });
    } catch (error) {
        console.error('Error al importar datos desde SQL:', error);
        res.status(500).json({ message: 'Error al importar datos', error: error.message });
    }
});

export default router;
