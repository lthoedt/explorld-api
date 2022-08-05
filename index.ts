import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const route_main = require('./controllers/MainController');
import bodyParser from 'body-parser'

import {createDatabase} from './database/db';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', "true");

    // Pass to next layer of middleware
    next();
});

app.use(bodyParser.json())
app.use( "/api/", route_main );

app.listen(port, async () => {
	await createDatabase();
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
