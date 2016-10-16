const BaseController = require('../base-controller');
const _ = require('lodash');

function LeaveTypeController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

LeaveTypeController.prototype = _.create(BaseController.prototype, {
	constructor: LeaveTypeController,
});

module.exports = LeaveTypeController;
