const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.File.sync()
			.then(() => models.File.bulkCreate([
				{ fileId: '566e6a932620e', fileName: 'Class Flow.xlsx', fileUrl: '/media/attachment/Materi/Matematika/2016/Class_Flow_20151214080659.xlsx', typeFileId: 1 },
				{ fileId: '566e783ecb755', fileName: 'VOR SYSTEM.docx', fileUrl: '/media/attachment/Materi/Biologi/2016/VOR_SYSTEM_20151214090518.docx', typeFileId: 1 },
				{ fileId: '567177a8e2879', fileName: 'b-indo-to1-1.png', fileUrl: '/media/attachment/Soal/Bahasa Indonesia/2016/b-indo-to1-1_20151216153936.png', typeFileId: 2 },
				{ fileId: '567177a93606b', fileName: 'b-indo-to1-1a.png', fileUrl: '/media/attachment/Option/Bahasa Indonesia/2016/b-indo-to1-1a_20151216153937.png', typeFileId: 3 },
				{ fileId: '567177a96af26', fileName: 'b-indo-to1-1b.png', fileUrl: '/media/attachment/Option/Bahasa Indonesia/2016/b-indo-to1-1b_20151216153937.png', typeFileId: 3 },
				{ fileId: '567177a9bd69d', fileName: 'b-indo-to1-1c.png', fileUrl: '/media/attachment/Option/Bahasa Indonesia/2016/b-indo-to1-1c_20151216153937.png', typeFileId: 3 },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.File.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
