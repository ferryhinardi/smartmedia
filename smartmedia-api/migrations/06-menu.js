const models = require('../models');

module.exports = {
	up: (queryInterface, Sequelize, done) => {
		models.Menu.sync()
			.then(() => models.Menu.bulkCreate([
				{ menuId: 1, menuName: 'Administrasi', menuLevel: 1, menuHeader: null, menuIndex: 1, menuUrl: null },
				{ menuId: 2, menuName: 'Persiapan', menuLevel: 1, menuHeader: null, menuIndex: 2, menuUrl: null },
				{ menuId: 3, menuName: 'Presentasi', menuLevel: 1, menuHeader: null, menuIndex: 3, menuUrl: null },
				{ menuId: 4, menuName: 'Evaluasi', menuLevel: 1, menuHeader: null, menuIndex: 4, menuUrl: null },
				{ menuId: 5, menuName: 'Master', menuLevel: 2, menuHeader: 1, menuIndex: 1, menuUrl: 'administrasi/master' },
				{ menuId: 6, menuName: 'Materi', menuLevel: 2, menuHeader: 2, menuIndex: 1, menuUrl: 'persiapan/materi' },
				{ menuId: 7, menuName: 'Administrasi', menuLevel: 2, menuHeader: 2, menuIndex: 2, menuUrl: 'persiapan/administrasi' },
				{ menuId: 8, menuName: 'Belajar', menuLevel: 2, menuHeader: 3, menuIndex: 1, menuUrl: null },
				{ menuId: 9, menuName: 'Ulangan', menuLevel: 2, menuHeader: 3, menuIndex: 2, menuUrl: 'presentasi/training' },
				{ menuId: 10, menuName: 'Nilai', menuLevel: 2, menuHeader: 4, menuIndex: 1, menuUrl: null },
				{ menuId: 11, menuName: 'Menu Management', menuLevel: 3, menuHeader: 0, menuIndex: 1, menuUrl: '#menu-management' },
				{ menuId: 12, menuName: 'Menu Access', menuLevel: 3, menuHeader: 0, menuIndex: 2, menuUrl: '#menu-access' },
				{ menuId: 13, menuName: 'Profile Sekolah', menuLevel: 3, menuHeader: 5, menuIndex: 1, menuUrl: '#profile-school' },
				{ menuId: 14, menuName: 'Data Guru', menuLevel: 3, menuHeader: 5, menuIndex: 2, menuUrl: '#teacher-data' },
				{ menuId: 15, menuName: 'Data Siswa', menuLevel: 3, menuHeader: 5, menuIndex: 3, menuUrl: '#student-data' },
				{ menuId: 16, menuName: 'Data Kelas', menuLevel: 3, menuHeader: 5, menuIndex: 4, menuUrl: '#class-data' },
				{ menuId: 17, menuName: 'Data Jadwal', menuLevel: 3, menuHeader: 5, menuIndex: 6, menuUrl: '#schedule-data' },
				{ menuId: 18, menuName: 'Data Matapelajaran', menuLevel: 3, menuHeader: 5, menuIndex: 5, menuUrl: '#course-data' },
				{ menuId: 19, menuName: 'Pengaturan Persiapan', menuLevel: 3, menuHeader: 6, menuIndex: 1, menuUrl: '#input-matapelajaran' },
				{ menuId: 20, menuName: 'Pengaturan Ujian', menuLevel: 3, menuHeader: 6, menuIndex: 2, menuUrl: null },
				{ menuId: 21, menuName: 'Absensi', menuLevel: 3, menuHeader: 7, menuIndex: 1, menuUrl: '#absence' },
				{ menuId: 22, menuName: 'Pelatihan', menuLevel: 3, menuHeader: 9, menuIndex: 1, menuUrl: '#exam' },
			]))
			.then(() => done())
			.catch(err => console.log(err));
	},
	down: (queryInterface, Sequelize, done) => {
		models.Menu.drop()
			.then(() => done())
			.catch(err => console.log(err));
	},
};
