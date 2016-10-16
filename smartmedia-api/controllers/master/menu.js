const BaseController = require('../base-controller');
const _ = require('lodash');

function MenuController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

MenuController.prototype = _.create(BaseController.prototype, {
	constructor: MenuController,
});

module.exports = MenuController;
