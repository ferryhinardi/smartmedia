const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Score.sync()
			.then(() => models.Score.bulkCreate([
				{ scoreId: 1, typeScoreId: 1, score: 80.0 },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Score.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
