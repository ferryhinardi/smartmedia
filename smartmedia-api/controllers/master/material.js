const BaseController = require('../base-controller');
const _ = require('lodash');

function MaterialController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

MaterialController.prototype = _.create(BaseController.prototype, {
	constructor: MaterialController,
});

module.exports = MaterialController;
