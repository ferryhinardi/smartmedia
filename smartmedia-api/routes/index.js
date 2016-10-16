const fs = require('fs');
const path = require('path');
const controllers = require('../controllers');
// const validations = require('../validations');

const basename = path.basename(module.filename);
const routes = [];

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
				const subRoutes = require(filePath)(controllers);
				subRoutes.forEach(route => routes.push(route));
			}
		});
}(__dirname));

exports.register = (server, options, next) => {
	server.route(routes);
	next();
};

exports.register.attributes = {
	name: 'api-routes',
	version: '1.0.0',
};
