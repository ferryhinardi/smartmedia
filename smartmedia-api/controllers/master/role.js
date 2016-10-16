const BaseController = require('../base-controller');
const _ = require('lodash');

function RoleController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

RoleController.prototype = _.create(BaseController.prototype, {
	constructor: RoleController,
});

module.exports = RoleController;
