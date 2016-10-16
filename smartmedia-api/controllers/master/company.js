const BaseController = require('../base-controller');
const _ = require('lodash');

function CompanyController(models) {
	BaseController.call(this);
	this.handlers = ['findAll'];
	this.sequelize = models.sequelize;
	this.company = models.Company;
}

CompanyController.prototype = _.create(BaseController.prototype, {
	constructor: CompanyController,
});

CompanyController.prototype.findAll = function (request, reply) {
	this.company.findAll({
		where: { deleted_at: null },
	})
	.then(company => reply.success(company))
	.catch(err => reply.fail(err.message));
};

module.exports = CompanyController;
