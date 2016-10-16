module.exports = function (sequelize, DataTypes) {
	const Teacher = sequelize.define('Teacher', {
		teacherId: {
			type: DataTypes.STRING(30),
			primaryKey: true,
			field: 'teacher_id',
		},
		yearId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'year_id',
		},
		fullName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'full_name',
		},
		birthPlace: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'birth_place',
		},
		birthDate: {
			type: DataTypes.DATEONLY,
			allowNull: false,
			field: 'birth_date',
		},
		gender: {
			allowNull: false,
			type: DataTypes.ENUM('FEMALE', 'MALE'),
		},
		address: {
			allowNull: false,
			type: DataTypes.TEXT,
		},
	}, {
		classMethods: {
			associate: function (models) {
				Teacher.belongsTo(models.Term, { foreignKey: 'yearId', as: 'term' });
			},
		},
		tableName: 'Teacher',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Teacher;
};
