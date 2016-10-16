const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Shift.sync()
			.then(() => models.Shift.bulkCreate([
				{ shiftId: 1, shiftName: '07.20 - 09.00', startTime: '07:20:00', endTime: '09:00:00' },
				{ shiftId: 2, shiftName: '09.20 - 11.00', startTime: '09:20:00', endTime: '11:00:00' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Shift.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
