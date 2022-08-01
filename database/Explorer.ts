const mongoose = require('mongoose');
const Schema = mongoose.Schema;

import { point_schema } from './Point';

export const explorer_schema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	name: {
		type: String,
	},
	journey: [point_schema]
})

export default mongoose.model('Explorer', explorer_schema);