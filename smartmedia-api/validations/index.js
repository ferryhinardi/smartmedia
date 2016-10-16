const fs = require('fs');
const path = require('path');
const Joi = require('joi');

const basename = path.basename(module.filename);
const validations = {};

(function load(dir) {
	fs
    .readdirSync(dir)
		.filter(file => (file.indexOf('.') !== 0) && (file !== basename))
		.forEach((file) => {
			const filePath = path.join(dir, file);
			const stat = fs.statSync(filePath);
			if (stat.isDirectory()) {
				load(filePath);
			} else {
				const validation = require(filePath)(Joi, validations);
				validations[validation.name] = validation.schema;
			}
		});
}(__dirname));

module.exports = validations;
