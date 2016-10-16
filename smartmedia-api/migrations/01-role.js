const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Role.sync()
			.then(() => models.Role.bulkCreate([
				{ roleId: 1, roleName: 'Super Admin' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Role.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
