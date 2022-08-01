import express from 'express';

const router = express.Router();

const route_points = require('./PointsController');

router.use("/points", route_points);

module.exports = router;