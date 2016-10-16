const BaseController = require('../base-controller');
const _ = require('lodash');

function PermissionController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

PermissionController.prototype = _.create(BaseController.prototype, {
	constructor: PermissionController,
});

module.exports = PermissionController;
