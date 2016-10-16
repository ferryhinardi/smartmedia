const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Student.sync()
			.then(() => models.Student.bulkCreate([
				{ studentId: '1501171970', yearId: 1, fullName: 'Donny', birthPlace: 'Pekanbaru', birthDate: '1992-11-10', gender: 'MALE', address: 'Jl. Haji Mulia no 23' },
				{ studentId: '1501171971', yearId: 1, fullName: 'Celine Tan', birthPlace: 'Jakarta', birthDate: '1997-08-09', gender: 'FEMALE', address: 'Jl Sudirman' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Student.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
