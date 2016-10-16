module.exports = function (sequelize, DataTypes) {
	const Material = sequelize.define('Material', {
		materialId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'material_id',
		},
		fileId: {
			type: DataTypes.UUID,
			allowNull: true,
			field: 'file_id',
		},
		subject: {
			type: DataTypes.STRING(100),
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING(300),
			allowNull: false,
		},
	}, {
		classMethods: {
			associate: function (models) {
				Material.belongsTo(models.File, { foreignKey: 'fileId', as: 'file' });
			},
		},
		tableName: 'Material',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Material;
};
