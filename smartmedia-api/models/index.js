const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

const basename = path.basename(module.filename);
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/mysql.json'))[env];
const sequelize = new Sequelize(config.database, config.username, config.password, config);
const db = {};

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
				const model = sequelize.import(filePath);
				db[model.name] = model;
			}
		});
}(__dirname));

Object.keys(db).forEach((modelName) => {
	if ('associate' in db[modelName]) {
		db[modelName].associate(db);
	}
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
