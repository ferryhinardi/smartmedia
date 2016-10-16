const BaseController = require('../base-controller');
const _ = require('lodash');

function ExamController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

ExamController.prototype = _.create(BaseController.prototype, {
	constructor: ExamController,
});

module.exports = ExamController;
