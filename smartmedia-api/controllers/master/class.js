const BaseController = require('../base-controller');
const _ = require('lodash');

function ClassController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

ClassController.prototype = _.create(BaseController.prototype, {
	constructor: ClassController,
});

module.exports = ClassController;
