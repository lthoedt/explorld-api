import express from 'express';
import { sendStatus } from "./functions"
import { getJourney, syncJourney as syncJourney } from '../service/journeyService';
import { getExplorer } from '../service/explorerService';
import Point from '../database/Point';

const router = express.Router();

const journey_route = '/:explorerId/journey';

router.use(`${journey_route}`, async (req,res,next)=> {
    const explorerId = req.params.explorerId;

    const explorer = await getExplorer(explorerId);

    if (!explorer) return res.status(404).json({success: false, body: `Explorer with id: '${explorerId}' not found.`}) // TODO: find user
    res.locals.explorer = explorer;

    next()
})

// addPoint
router.post(`${journey_route}/sync`, async (req, res) => {
    const points : [Object] = req.body;
    const explorer = res.locals.explorer;

    const statusCode = await syncJourney(explorer, points);

    res.json({success: statusCode})
})

router.get(`${journey_route}/sync`, async (req, res) => {
    const explorer = res.locals.explorer;
    const journey : [typeof Point] = await getJourney(explorer);

    if (journey == null) return res.status(500).json({success: false, body: "Something went wrong with retrieving your journey."})

    res.json(journey);
})

module.exports = router