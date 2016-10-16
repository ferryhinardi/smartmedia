const Company = controllers => [{
	method: 'GET',
	path: '/company',
	handler: controllers.CompanyController.findAll,
	config: {
		description: 'Retrieve all companies',
	},
}];

module.exports = Company;
