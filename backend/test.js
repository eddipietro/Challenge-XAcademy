import { exportarJugadoresCSV } from './utils/csvExport.js';

const testExport = async () => {
  try {
    const csvData = await exportarJugadoresCSV({});
    console.log(csvData);
  } catch (error) {
    console.error('Error en la prueba de exportación:', error);
  }
};

testExport();
