const BaseController = require('../base-controller');
const _ = require('lodash');

function TeacherController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

TeacherController.prototype = _.create(BaseController.prototype, {
	constructor: TeacherController,
});

module.exports = TeacherController;
