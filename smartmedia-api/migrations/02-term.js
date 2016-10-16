const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Term.sync()
			.then(() => models.Term.bulkCreate([
				{ yearId: 1, yearName: '2016' },
				{ yearId: 2, yearName: '2015' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Term.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
