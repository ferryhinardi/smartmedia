const BaseController = require('../base-controller');
const _ = require('lodash');

function AttendanceController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

AttendanceController.prototype = _.create(BaseController.prototype, {
	constructor: AttendanceController,
});

module.exports = AttendanceController;
