const BaseController = require('../base-controller');
const _ = require('lodash');

function LeaveReasonController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

LeaveReasonController.prototype = _.create(BaseController.prototype, {
	constructor: LeaveReasonController,
});

module.exports = LeaveReasonController;
