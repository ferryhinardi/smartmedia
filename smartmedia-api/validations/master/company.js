module.exports = function (Joi, validations) {
	return {
		name: 'Company',
		schema: {
			companyId: validations.Common.number.allow(null),
			companyName: validations.Common.mediumText.required(),
			companyProfile: validations.Common.mediumText.required(),
		},
	};
};
