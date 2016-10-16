const BaseController = require('../base-controller');
const _ = require('lodash');

function UserClassController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

UserClassController.prototype = _.create(BaseController.prototype, {
	constructor: UserClassController,
});

module.exports = UserClassController;
