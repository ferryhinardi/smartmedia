const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Material.sync()
			.then(() => models.Material.bulkCreate([
				{ materialId: 1, fileId: '567177a8e2879', subject: 'Bahasa Indonesia', description: 'Bahasa Indonesia tahun 2016' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Material.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
