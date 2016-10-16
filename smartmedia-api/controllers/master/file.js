const BaseController = require('../base-controller');
const _ = require('lodash');

function FileController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

FileController.prototype = _.create(BaseController.prototype, {
	constructor: FileController,
});

module.exports = FileController;
