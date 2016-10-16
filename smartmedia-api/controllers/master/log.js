const BaseController = require('../base-controller');
const _ = require('lodash');

function LogController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

LogController.prototype = _.create(BaseController.prototype, {
	constructor: LogController,
});

module.exports = LogController;
