module.exports = function (sequelize, DataTypes) {
	const Log = sequelize.define('Log', {
		logId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'log_id',
		},
		menuId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'menu_id',
		},
		description: {
			type: DataTypes.ENUM('C', 'U', 'D'),
			allowNull: false,
		},
	}, {
		classMethods: {
			associate: function (models) {
				Log.belongsTo(models.Menu, { foreignKey: 'menuId', as: 'menu' });
			},
		},
		tableName: 'Log',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Log;
};
