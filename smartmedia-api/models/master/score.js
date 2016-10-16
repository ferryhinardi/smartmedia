module.exports = function (sequelize, DataTypes) {
	const Score = sequelize.define('Score', {
		scoreId: {
			type: DataTypes.INTEGER(11),
			primaryKey: true,
			autoIncrement: true,
			field: 'score_id',
		},
		typeScoreId: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			field: 'type_score_id',
		},
		score: {
			type: DataTypes.DECIMAL(10, 0),
			allowNull: false,
		},
	}, {
		classMethods: {
			associate: function (models) {
				Score.belongsTo(models.TypeScore, { foreignKey: 'typeScoreId', as: 'typeScore' });
			},
		},
		tableName: 'Score',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return Score;
};
