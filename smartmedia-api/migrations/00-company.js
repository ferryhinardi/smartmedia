const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Company.sync()
			.then(() => models.Company.bulkCreate([
				{
					companyId: 1,
					companyName: 'Xaverius 1',
					companyProfile: 'Alumnus Xaverius 1',
				},
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Company.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
