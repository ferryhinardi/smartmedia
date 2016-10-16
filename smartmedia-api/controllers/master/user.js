const BaseController = require('../base-controller');
const _ = require('lodash');

function UserController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

UserController.prototype = _.create(BaseController.prototype, {
	constructor: UserController,
});

module.exports = UserController;
