module.exports = function (sequelize, DataTypes) {
	const Course = sequelize.define('Course', {
		courseId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'course_id',
		},
		courseName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'course_name',
		},
	}, {
		tableName: 'Course',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Course;
};
