module.exports = function (sequelize, DataTypes) {
	const LeaveType = sequelize.define('LeaveType', {
		leaveTypeId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'leave_type_id',
		},
		leaveDescription: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'leave_description',
		},
	}, {
		tableName: 'LeaveType',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return LeaveType;
};
