module.exports = function (sequelize, DataTypes) {
	const Menu = sequelize.define('Menu', {
		menuId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'menu_id',
		},
		menuName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'menu_name',
		},
		menuLevel: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'menu_level',
		},
		menuHeader: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'menu_header',
		},
		menuIndex: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'menu_index',
		},
		menuUrl: {
			type: DataTypes.STRING(100),
			allowNull: true,
			field: 'menu_url',
		},
	}, {
		tableName: 'Menu',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Menu;
};
