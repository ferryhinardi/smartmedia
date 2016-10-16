const BaseController = require('../base-controller');
const _ = require('lodash');

function RoleUserController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

RoleUserController.prototype = _.create(BaseController.prototype, {
	constructor: RoleUserController,
});

module.exports = RoleUserController;
