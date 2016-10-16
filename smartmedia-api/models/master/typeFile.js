module.exports = function (sequelize, DataTypes) {
	const TypeFile = sequelize.define('TypeFile', {
		typeFileId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'type_file_id',
		},
		typeFileName: {
			type: DataTypes.STRING(100),
			allowNull: false,
			field: 'type_file_name',
		},
	}, {
		tableName: 'TypeFile',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return TypeFile;
};
