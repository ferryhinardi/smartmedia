module.exports = function (sequelize, DataTypes) {
	const Company = sequelize.define('Company', {
		companyId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'company_id',
		},
		companyName: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'company_name',
		},
		companyProfile: {
			type: DataTypes.STRING(200),
			allowNull: false,
			field: 'company_profile',
		},
	}, {
		tableName: 'Company',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Company;
};
