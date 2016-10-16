const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Course.sync()
			.then(() => models.Course.bulkCreate([
				{ courseId: 1, courseName: 'Biologi' },
				{ courseId: 2, courseName: 'Matematika' },
				{ courseId: 3, courseName: 'Kimia' },
				{ courseId: 4, courseName: 'Fisika' },
				{ courseId: 5, courseName: 'Sosiologi' },
				{ courseId: 6, courseName: 'Bahasa Indonesia' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Course.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
