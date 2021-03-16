import express from 'express';
import ChirpStore from '../utils/chirpstore';

const router = express.Router();

// GET http:Localhost:3000/api/chirps/123
router.get('/:id/details', (req: { params: { id: any; }; },res: { json: (arg0: { nextid: number; }) => void; }) => {
    const id = req.params.id;
    const chirp = ChirpStore.GetChirps()
    res.json(chirp);
});

// GET http:Localhost:3000/api/chirps/
router.get('/', (req: any, res: { json: (arg0: { msg: string; }) => void; }) => {
    res.json({ msg: 'testing get all chirps' });
});

// POST http:Localhost:3000/api/chirps/
// { title: string, content: string }
router.post('/', (req: { body: any; }, res: { json: (arg0: { msg: string; test: any; }) => void; }) => {
    ChirpStore.CreateChirp();
    const newChirp = req.body;
    res.json({ msg: 'new chirp added', test: newChirp });
});

// PUT http:Localhost:3000/api/chirps/123
// { title: string, content: string }
router.put('/:id', (req: { params: { id: any; }; body: any; }, res: { json: (arg0: { msg: string; test: any; }) => void; }) => {
    const id = req.params.id;
    const editedChirp = req.body;
    ChirpStore.UpdateChirp(id, editedChirp);
    res.json({ msg: `chirp id ${id} edited`, test: editedChirp});
});

// DELETE http:Localhost:3000/api/chirps/123
router.delete('/:id/details', (req: { params: { id: any; }; },res: { json: (arg0: { msg: string; }) => void; }) => {
    const id = req.params.id;
    ChirpStore.DeleteChirp(id)
    res.json({msg: `chirp id ${id} deleted`});
});

module.exports = router;