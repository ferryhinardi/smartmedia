const BaseController = require('../base-controller');
const _ = require('lodash');

function ShiftController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

ShiftController.prototype = _.create(BaseController.prototype, {
	constructor: ShiftController,
});

module.exports = ShiftController;
