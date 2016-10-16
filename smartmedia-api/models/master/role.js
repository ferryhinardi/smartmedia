module.exports = function (sequelize, DataTypes) {
	const Role = sequelize.define('Role', {
		roleId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'role_id',
		},
		roleName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'role_name',
		},
	});

	return Role;
};
