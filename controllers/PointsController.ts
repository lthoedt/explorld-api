import express from 'express';
import { sendStatus } from "./functions"
import { syncPoints } from '../service/pointsService';

const router = express.Router();

// addPoint
router.post('/:explorerId/sync', async (req, res) => {
    const points : [Object] = req.body;
    const explorerId = req.params.explorerId;

    if (!explorerId) res.json({success: false, body: "No explorerId given."})

    const statusCode = await syncPoints(explorerId, points);

    console.log(points);

    res.json({success: statusCode})
})

module.exports = router