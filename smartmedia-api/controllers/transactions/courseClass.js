const BaseController = require('../base-controller');
const _ = require('lodash');

function CourseClassController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

CourseClassController.prototype = _.create(BaseController.prototype, {
	constructor: CourseClassController,
});

module.exports = CourseClassController;
