module.exports = function (sequelize, DataTypes) {
	const Class = sequelize.define('Class', {
		classId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'class_id',
		},
		className: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'class_name',
		},
	}, {
		tableName: 'Class',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Class;
};
