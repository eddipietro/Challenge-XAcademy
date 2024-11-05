
import fs from 'fs';
import mysql from 'mysql2/promise'; 

export const importSQLData = async (filePath) => {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    const sql = fs.readFileSync(filePath, 'utf-8'); 

    try {
        const [results] = await connection.query(sql);
        return results;
    } catch (error) {
        throw new Error(`Error al ejecutar el archivo SQL: ${error.message}`);
    } finally {
        await connection.end(); 
    }
};
