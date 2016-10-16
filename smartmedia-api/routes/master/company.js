const Company = (controllers, validations) => [
	{
		method: 'GET',
		path: '/company',
		handler: controllers.CompanyController.findAll,
		config: {
			description: 'Retrieve all companies',
		},
	},
	{
		method: 'POST',
		path: '/company',
		handler: controllers.CompanyController.create,
		config: {
			description: 'Create New Company',
			validate: {
				payload: {
					companyName: validations.Company.companyName,
					companyProfile: validations.Company.companyProfile,
				},
			},
		},
	},
	{
		method: 'PUT',
		path: '/company/{companyId}',
		handler: controllers.CompanyController.update,
		config: {
			description: 'Update Company By Id',
			validate: {
				payload: {
					companyName: validations.Company.companyName,
					companyProfile: validations.Company.companyProfile,
				},
				params: {
					companyId: validations.Company.companyId,
				},
			},
		},
	},
	{
		method: 'DELETE',
		path: '/company/{companyId}',
		handler: controllers.CompanyController.destroy,
		config: {
			description: 'Delete Company By Id',
			validate: {
				params: {
					companyId: validations.Company.companyId,
				},
			},
		},
	},
];

module.exports = Company;
