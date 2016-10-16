const fs = require('fs');
const path = require('path');
const models = require('../models');

const basename = path.basename(module.filename);
const controllers = {};

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
				const Controller = require(filePath);
				const controller = new Controller(models);
				controllers[controller.getName()] = controller.getHandlers();
			}
		});
}(__dirname));

module.exports = controllers;
