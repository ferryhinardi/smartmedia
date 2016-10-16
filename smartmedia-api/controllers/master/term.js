const BaseController = require('../base-controller');
const _ = require('lodash');

function TermController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

TermController.prototype = _.create(BaseController.prototype, {
	constructor: TermController,
});

module.exports = TermController;
