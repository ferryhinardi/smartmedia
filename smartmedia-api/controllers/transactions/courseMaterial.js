const BaseController = require('../base-controller');
const _ = require('lodash');

function CourseMaterialController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

CourseMaterialController.prototype = _.create(BaseController.prototype, {
	constructor: CourseMaterialController,
});

module.exports = CourseMaterialController;
