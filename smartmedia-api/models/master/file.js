module.exports = function (sequelize, DataTypes) {
	const File = sequelize.define('File', {
		fileId: {
			type: DataTypes.UUID,
			primaryKey: true,
			field: 'file_id',
		},
		fileName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'file_name',
		},
		fileUrl: {
			type: DataTypes.TEXT,
			allowNull: true,
			field: 'file_url',
		},
		typeFileId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'type_file_id',
		},
	}, {
		classMethods: {
			associate: function (models) {
				File.belongsTo(models.TypeFile, { foreignKey: 'typeFileId', as: 'typeFile' });
			},
		},
		tableName: 'File',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return File;
};
