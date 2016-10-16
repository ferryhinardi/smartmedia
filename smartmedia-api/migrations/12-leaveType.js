const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.LeaveType.sync()
			.then(() => models.LeaveType.bulkCreate([
				{ leaveTypeId: 1, leaveDescription: 'Sick' },
				{ leaveTypeId: 2, leaveDescription: 'Graduation' },
				{ leaveTypeId: 3, leaveDescription: 'Personal Leave' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.LeaveType.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
