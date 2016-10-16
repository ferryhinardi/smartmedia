const Promise = require('bluebird');
const bcrypt = Promise.promisifyAll(require('bcrypt'));

module.exports = function (sequelize, DataTypes) {
	const User = sequelize.define('User', {
		userId: {
			type: DataTypes.STRING(30),
			primaryKey: true,
			field: 'user_id',
		},
		roleId: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			field: 'role_id',
		},
		studentId: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'student_id',
		},
		teacherId: {
			type: DataTypes.STRING(30),
			allowNull: true,
			field: 'teacher_id',
		},
		password: {
			type: DataTypes.STRING(60),
			allowNull: false,
			set: function (password) {
				const salt = bcrypt.genSaltSync(10);
				const hash = bcrypt.hashSync(password, salt);
				this.setDataValue('password', hash);
			},
		},
	}, {
		classMethods: {
			associate: function (models) {
				User.belongsTo(models.Role, { foreignKey: 'roleId', as: 'role' });
				User.belongsTo(models.Student, { foreignKey: 'studentId', as: 'student' });
				User.belongsTo(models.Teacher, { foreignKey: 'teacher_id', as: 'teacher' });
			},
		},
		instanceMethods: {
			validatePassword: function (password) {
				return bcrypt.compareAsync(password, this.getDataValue('password'));
			},
		},
		tableName: 'User',
		underscored: true,
		paranoid: true,
		timestamps: true,
	});

	return User;
};
