import express from 'express';
import { sendStatus } from "./functions"

const router = express.Router();

// addPoint
router.post('/:id', async (req, res) => {
    const id : String = req.params.id;


    res.json({id})
})

module.exports = router