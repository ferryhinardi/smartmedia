const BaseController = require('../base-controller');
const _ = require('lodash');

function CourseController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

CourseController.prototype = _.create(BaseController.prototype, {
	constructor: CourseController,
});

module.exports = CourseController;
