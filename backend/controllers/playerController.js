import Player from '../models/player.js';

export const getAllPlayers = async (req, res) => {
    try {
        const players = await Player.findAll();
        res.json(players);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching players', error });
    }
};

export const createPlayer = async (req, res) => {
    const { name, position, club, nationality, skills } = req.body;
    try {
        const player = await Player.create({ name, position, club, nationality, skills });
        res.status(201).json(player);
    } catch (error) {
        res.status(500).json({ message: 'Error creating player', error });
    }
};
