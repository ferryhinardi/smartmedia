const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Log.sync()
			.then(() => models.Log.bulkCreate([
				{ logId: 1, menuId: 1, description: 'C' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Log.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
