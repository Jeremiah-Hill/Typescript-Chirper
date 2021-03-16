import express from 'express';
import ChirpStore from '../utils/chirpstore';

const router = express.Router();

// GET http:Localhost:3000/api/chirps/123
router.get('/:id/details', (req, res) => {
    const id = req.params.id;
    const chirp = ChirpStore.GetChirps(id)
    res.json(chirp);
});

// GET http:Localhost:3000/api/chirps/
router.get('/', (req, res) => {
    res.json({ msg: 'testing get all chirps' });
});

// POST http:Localhost:3000/api/chirps/
// { title: string, content: string }
router.post('/', (req, res) => {
    ChirpStore.CreateChirp();
    const newChirp = req.body;
    res.json({ msg: 'new chirp added', test: newChirp });
});

// PUT http:Localhost:3000/api/chirps/123
// { title: string, content: string }
router.put('/:id', (req, res) => {
    const id = req.params.id;
    const editedChirp = req.body;
    ChirpStore.UpdateChirp(id, editedChirp);
    res.json({ msg: `chirp id ${id} edited`, test: editedChirp});
});

// DELETE http:Localhost:3000/api/chirps/123
router.delete('/:id/details', (req, res) => {
    const id = req.params.id;
    ChirpStore.DeleteChirp(id)
    res.json({msg: `chirp id ${id} deleted`});
});

module.exports = router;