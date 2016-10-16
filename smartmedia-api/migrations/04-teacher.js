const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Teacher.sync()
			.then(() => models.Teacher.bulkCreate([
				{ teacherId: 'T1000', yearId: 1, fullName: 'Daniel Tan', birthPlace: 'Jakarta', birthDate: '1987-03-10', gender: 'MALE', address: 'Jl Jendral Sudirman No 10' },
				{ teacherId: 'T1010', yearId: 1, fullName: 'Syana', birthPlace: 'Jakarta', birthDate: '1989-08-24', gender: 'FEMALE', address: 'Jl Lebak Bulus' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Teacher.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
