const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.LeaveReason.sync()
			.then(() => models.LeaveReason.bulkCreate([
				{ leaveId: 1, leaveName: 'Need Vacation' },
				{ leaveId: 2, leaveName: 'Get Merid' },
				{ leaveId: 3, leaveName: 'Trip to Other Place' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.LeaveReason.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
