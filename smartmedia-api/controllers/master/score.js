const BaseController = require('../base-controller');
const _ = require('lodash');

function ScoreController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

ScoreController.prototype = _.create(BaseController.prototype, {
	constructor: ScoreController,
});

module.exports = ScoreController;
