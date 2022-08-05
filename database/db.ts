import Point from "../database/Point";
import Explorer from "../database/Explorer";

const mongoose = require("mongoose");

const db = mongoose.connection;

// db.explorers.insert({id:"123",name:"leo",journey:[]})

export const createDatabase = async () => {
	const url: string = String(process.env.DB_URL);

	await mongoose.connect(url);

	mongoose.connection.on("error", (err: any) => {
		console.log(err);
	});

	await Point.createCollection();
	await Explorer.createCollection();
};
