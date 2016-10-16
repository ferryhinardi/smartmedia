const BaseController = require('../base-controller');
const _ = require('lodash');

function StudentController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

StudentController.prototype = _.create(BaseController.prototype, {
	constructor: StudentController,
});

module.exports = StudentController;
