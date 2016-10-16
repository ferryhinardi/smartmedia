module.exports = function (sequelize, DataTypes) {
	const TypeScore = sequelize.define('TypeScore', {
		typeScoreId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'type_score_id',
		},
		courseId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'course_id',
		},
		yearId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'year_id',
		},
		type: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		weight: {
			type: DataTypes.DECIMAL(10, 0),
			allowNull: false,
		},
	}, {
		classMethods: {
			associate: function (models) {
				TypeScore.belongsTo(models.Course, { foreignKey: 'courseId', as: 'course' });
				TypeScore.belongsTo(models.Term, { foreignKey: 'yearId', as: 'term' });
			},
		},
		tableName: 'TypeScore',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return TypeScore;
};
