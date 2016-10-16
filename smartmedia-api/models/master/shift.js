module.exports = function (sequelize, DataTypes) {
	const Shift = sequelize.define('Shift', {
		shiftId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'shift_id',
		},
		shiftName: {
			type: DataTypes.STRING(50),
			allowNull: false,
			field: 'shift_name',
		},
		startTime: {
			type: DataTypes.TIME,
			allowNull: false,
			field: 'start_time',
		},
		endTime: {
			type: DataTypes.TIME,
			allowNull: false,
			field: 'end_time',
		},
	}, {
		tableName: 'Shift',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Shift;
};
