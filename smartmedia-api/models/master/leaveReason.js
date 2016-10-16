module.exports = function (sequelize, DataTypes) {
	const LeaveReason = sequelize.define('LeaveReason', {
		leaveId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'leave_id',
		},
		leaveName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'leave_name',
		},
	}, {
		tableName: 'LeaveReason',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return LeaveReason;
};
