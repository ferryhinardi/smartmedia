module.exports = function (Joi) {
	return {
		name: 'Common',
		schema: {
			id: Joi.number().positive(),
			number: Joi.number().positive(),
			shortText: Joi.string().trim().min(3).max(30),
			mediumText: Joi.string().trim().min(3).max(100),
			longText: Joi.string().trim().min(3).max(255),
			veryLongText: Joi.string().trim().min(3).max(1000),
			date: Joi.date(),
			decimal: Joi.number().precision(2),
			boolean: Joi.boolean(),
		},
	};
};
