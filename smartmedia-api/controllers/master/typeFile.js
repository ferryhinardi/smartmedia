const BaseController = require('../base-controller');
const _ = require('lodash');

function TypeFileController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

TypeFileController.prototype = _.create(BaseController.prototype, {
	constructor: TypeFileController,
});

module.exports = TypeFileController;
