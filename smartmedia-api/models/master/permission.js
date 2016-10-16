module.exports = function (sequelize, DataTypes) {
	const Permission = sequelize.define('Permission', {
		permissionId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'permission_id',
		},
		userId: {
			type: DataTypes.STRING(30),
			allowNull: false,
			field: 'user_id',
		},
		leaveId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'leave_id',
		},
		leaveTypeId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'leave_type_id',
		},
		date: {
			type: DataTypes.DATEONLY,
			allowNull: false,
		},
	}, {
		classMethods: {
			associate: function (models) {
				Permission.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
				Permission.belongsTo(models.LeaveReason, { foreignKey: 'leaveId', as: 'leaveReason' });
				Permission.belongsTo(models.LeaveType, { foreignKey: 'leaveTypeId', as: 'leaveType' });
			},
		},
		tableName: 'Permission',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Permission;
};
