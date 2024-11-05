import express from 'express'; // Importación por defecto de Express

const app = express();

// Manejo de todas las rutas
app.get('*', (req: express.Request, res: express.Response) => {
    res.send('Hello from the server!'); // Puedes cambiar esto según tu lógica
});

// Definición del puerto
const PORT = process.env['PORT'] || 3306; // Uso de notación de corchetes

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// Exportación por defecto
export default app;
