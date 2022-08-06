import express from 'express';
import { sendStatus } from "./functions"
import { syncJourney as syncJourney } from '../service/journeyService';

const router = express.Router();

// addPoint
router.post('/:explorerId/journey/sync', async (req, res) => {
    const points : [Object] = req.body;
    const explorerId = req.params.explorerId;

    if (!explorerId) res.json({success: false, body: "No explorerId given."})

    const statusCode = await syncJourney(explorerId, points);

    res.json({success: statusCode})
})

module.exports = router