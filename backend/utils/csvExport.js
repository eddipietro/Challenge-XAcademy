// backend/utils/csvExport.js
import { Parser } from 'json2csv';
import { Player } from '../models/player.js';

export const exportarJugadoresCSV = async (filtros) => {
  try {
    const jugadores = await Player.findAll({ where: filtros });

    if (jugadores.length === 0) {
      throw new Error('No se encontraron jugadores con los filtros especificados.');
    }

    const parser = new Parser();
    return parser.parse(jugadores.map(j => j.toJSON()));
  } catch (error) {
    console.error('Error al exportar jugadores a CSV:', error);
    throw error;
  }
};
