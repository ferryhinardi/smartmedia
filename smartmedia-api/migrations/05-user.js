const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.User.sync()
			.then(() => models.User.bulkCreate([
				{
					userId: '1501171970',
					studentId: '1501171970',
					teacherId: null,
					roleId: 1,
					password: '123456',
				},
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.User.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
