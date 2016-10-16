const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Permission.sync()
			.then(() => models.Permission.bulkCreate([
				{ permissionId: 1, userId: '1501171970', leaveId: 1, leaveTypeId: 3, date: '2016-08-01' },
				{ permissionId: 2, userId: '1501171970', leaveId: 2, leaveTypeId: 3, date: '2016-09-01' },
				{ permissionId: 3, userId: '1501171970', leaveId: 3, leaveTypeId: 3, date: '2016-10-01' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Permission.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
