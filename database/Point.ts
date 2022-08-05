const mongoose = require('mongoose');

const Schema = mongoose.Schema;

export const point_schema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	coordinates: {
		lat: {
			type: Number,
			required: true,
		},
		lon: {
			type: Number,
			required: true,
		},
	},
	heading: {
		type: Number,
		default: 0,
	},
	time: {
		type: Number,
		required: true,
	},
});

export default mongoose.model("Point", point_schema)
