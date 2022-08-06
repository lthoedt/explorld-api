import express from 'express';

const router = express.Router();

const route_explorer = require('./ExplorerController');

router.use("/explorer", route_explorer);

module.exports = router;