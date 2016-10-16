const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.TypeFile.sync()
			.then(() => models.TypeFile.bulkCreate([
				{ typeFileId: 1, typeFileName: 'Materi' },
				{ typeFileId: 2, typeFileName: 'Soal' },
				{ typeFileId: 3, typeFileName: 'Option' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.TypeFile.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
