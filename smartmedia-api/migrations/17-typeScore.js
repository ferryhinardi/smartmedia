const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.TypeScore.sync()
			.then(() => models.TypeScore.bulkCreate([
				{ typeScoreId: 1, courseId: 1, yearId: 1, type: 'Ulangan', weight: 50.0 },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.TypeScore.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
