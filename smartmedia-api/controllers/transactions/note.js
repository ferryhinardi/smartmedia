const BaseController = require('../base-controller');
const _ = require('lodash');

function NoteController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
}

NoteController.prototype = _.create(BaseController.prototype, {
	constructor: NoteController,
});

module.exports = NoteController;
