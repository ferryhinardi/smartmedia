const BaseController = require('../base-controller');
const _ = require('lodash');

function CourseExamController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

CourseExamController.prototype = _.create(BaseController.prototype, {
	constructor: CourseExamController,
});

module.exports = CourseExamController;
