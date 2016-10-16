const BaseController = require('../base-controller');
const _ = require('lodash');

function TypeScoreController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

TypeScoreController.prototype = _.create(BaseController.prototype, {
	constructor: TypeScoreController,
});

module.exports = TypeScoreController;
