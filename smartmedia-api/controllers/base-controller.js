function BaseController() {
	this.handlers = [];
}

BaseController.prototype.getName = function () {
	return this.constructor.name;
};

BaseController.prototype.getHandlers = function () {
	const handlers = {};
	for (const i in this.handlers) {
		const handlerName = this.handlers[i];
		if (typeof this[handlerName] === 'function') {
			handlers[handlerName] = this[handlerName].bind(this);
		}
	}
	return handlers;
};

module.exports = BaseController;
