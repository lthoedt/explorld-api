import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
const route_main = require('./controllers/MainController');
import bodyParser from 'body-parser'

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json())
app.use( "/api/", route_main );

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
