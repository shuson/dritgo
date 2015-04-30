var keystone = require('keystone');

var Driver = keystone.list('Driver');

/**
 * List Drivers
 */
exports.list = function(req, res) {
	Driver.model.find().populate('language_spoken language_written vehicle area').exec(function(err, items) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse ({
			drivers: items
		});
		
	});
}

/**
 * Get Driver by ID
 */
exports.get = function(req, res) {
	Driver.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');

		res.apiResponse ({
			driver: item
		});
		
	});
}

/**
 * Get Driver Beautifully by ID
 */
exports.getBeautifully = function(req, res) {
	Driver.model.findById(req.params.id).populate('language_spoken language_written vehicle area').exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse ({
			driver: item
		});
		

	});
}

/**
 * Create a Driver
 */
exports.create = function(req, res) {
	
	var item = new Driver.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			driver: item
		});
		
	});
}

/**
 * Update Driver by ID
 */
exports.update = function(req, res) {
	Driver.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = (req.method == 'POST') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('update error', err);
			
			res.apiResponse({
				driver: item
			});
			
		});
		
	});
}

/**
 * Delete Language by ID
 */
exports.remove = function(req, res) {
	Driver.model.findById(req.params.id).exec(function (err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		item.remove(function (err) {
			if (err) return res.apiError('database error', err);
			
			return res.apiResponse({
				success: true
			});
		});
		
	});
}