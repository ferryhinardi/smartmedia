const BaseController = require('../base-controller');
const _ = require('lodash');

function QuestionOptionController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

QuestionOptionController.prototype = _.create(BaseController.prototype, {
	constructor: QuestionOptionController,
});

module.exports = QuestionOptionController;
