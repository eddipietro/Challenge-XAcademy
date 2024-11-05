'use strict';
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const playersData = [];
    const filePath = path.join(__dirname, '../data/female_players.csv');

    // Procesamos el CSV para extraer solo los datos relevantes
    await new Promise((resolve, reject) => {
      fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (row) => {
          playersData.push({
            name: row.short_name,             // Cambia 'short_name' si necesitas otro campo
            nationality: row.nationality_name, // Cambia 'nationality_name' si es necesario
            position: row.player_positions,    // Cambia 'player_positions' según corresponda
            club: row.club_name,               // Cambia 'club_name' si es otro campo
            createdAt: new Date(),
            updatedAt: new Date(),
          });
        })
        .on('end', () => {
          resolve();
        })
        .on('error', (error) => {
          reject(error);
        });
    });

    // Insertamos los datos en la tabla 'players'
    await queryInterface.bulkInsert('players', playersData, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('players', null, {});
  }
};
