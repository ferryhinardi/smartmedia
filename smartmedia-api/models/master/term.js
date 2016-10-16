module.exports = function (sequelize, DataTypes) {
	const Term = sequelize.define('Term', {
		yearId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'year_id',
		},
		yearName: {
			type: DataTypes.STRING(10),
			allowNull: false,
			field: 'year_name',
		},
	}, {
		tableName: 'Term',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Term;
};
