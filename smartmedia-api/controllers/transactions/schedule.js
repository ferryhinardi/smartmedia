const BaseController = require('../base-controller');
const _ = require('lodash');

function ScheduleController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

ScheduleController.prototype = _.create(BaseController.prototype, {
	constructor: ScheduleController,
});

module.exports = ScheduleController;
