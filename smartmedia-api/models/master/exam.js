module.exports = function (sequelize, DataTypes) {
	const Exam = sequelize.define('Exam', {
		examId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'material_id',
		},
		fileId: {
			type: DataTypes.UUID,
			allowNull: true,
			field: 'file_id',
		},
		no: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
		},
		question: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		answer: {
			allowNull: false,
			type: DataTypes.ENUM('A', 'B', 'C', 'D', 'E'),
		},
	}, {
		classMethods: {
			associate: function (models) {
				Exam.belongsTo(models.File, { foreignKey: 'fileId', as: 'file' });
			},
		},
		tableName: 'Exam',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Exam;
};
