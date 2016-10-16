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

CompanyController.prototype.findById = function (request, reply) {
	this.company.findOne({
		where: { companyId: request.params.companyId, deleted_at: null },
	})
	.then(company => reply.success(company))
	.catch(err => reply.fail(err.message));
};

CompanyController.prototype.create = function (request, reply) {
	this.sequelize.transaction(function (transaction) {
		return this.company.create({
			companyName: request.payload.companyName,
			companyProfile: request.payload.companyProfile,
		}, { transaction });
	}).bind(this)
	.then(company => reply.success(company))
	.catch(err => reply.fail(err.message));
};

CompanyController.prototype.update = function (request, reply) {
	this.company.findById(request.params.companyId)
		.bind(this)
		.then((company) => {
			if (company == null) throw new Error('Company was not found');
			return this.sequelize.transaction((transaction) => {
				return company.update({
					companyName: request.payload.companyName,
					companyProfile: request.payload.companyProfile,
				}, { transaction });
			});
		})
		.then(company => reply.success(company))
		.catch(err => reply.fail(err.message));
};

CompanyController.prototype.destroy = function (request, reply) {
	this.company.findById(request.params.companyId)
		.bind(this)
		.then((company) => {
			if (company == null) throw new Error('Company was not found');
			return this.sequelize.transaction(transaction => company.destroy({ transaction }));
		})
		.then(() => reply.success(true))
		.catch(err => reply.fail(err.message));
};

module.exports = CompanyController;
