const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Class.sync()
			.then(() => models.Class.bulkCreate([
				{ classId: 1, className: '01PIJ' },
				{ classId: 2, className: '01PIT' },
				{ classId: 3, className: '01PAT' },
				{ classId: 4, className: '01PRJ' },
				{ classId: 5, className: '01PQT' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Class.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
