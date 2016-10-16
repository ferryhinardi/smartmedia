const BaseController = require('../base-controller');
const _ = require('lodash');

function RoleMenuController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

RoleMenuController.prototype = _.create(BaseController.prototype, {
	constructor: RoleMenuController,
});

module.exports = RoleMenuController;
