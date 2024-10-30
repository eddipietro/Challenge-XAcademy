import { Player } from '../models/player.js'; // Asegúrate de que esta ruta sea correcta

const getPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.json(players);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener jugadores.' });
    }
};

const createPlayer = async (req, res) => {
    try {
        const player = await Player.create(req.body);
        res.status(201).json(player);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear jugador.' });
    }
};

const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const [updated] = await Player.update(req.body, { where: { id } });
        if (updated) {
            const updatedPlayer = await Player.findByPk(id);
            res.json(updatedPlayer);
        } else {
            res.status(404).json({ error: 'Jugador no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar jugador.' });
    }
};

const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Player.destroy({ where: { id } });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: 'Jugador no encontrado.' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar jugador.' });
    }
};

export default { getPlayers, createPlayer, updatePlayer, deletePlayer };
