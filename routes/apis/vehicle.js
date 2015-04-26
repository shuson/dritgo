var keystone = require('keystone');

var Model = keystone.list('Vehicle');

/**
 * List vehicles
 */
exports.list = function(req, res) {
	Model.model.find(function(err, items) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse ({
			vehicles: items
		});
		
	});
}

/**
 * Get vehicle by ID
 */
exports.get = function(req, res) {
	Model.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse ({
			vehicle: item
		});
		
	});
}

/**
 * Create a vehicle
 */
exports.create = function(req, res) {
	
	var item = new Model.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			vehicle: item
		});
		
	});
}

/**
 * Update vehicle by ID
 */
exports.update = function(req, res) {
	Model.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = (req.method == 'POST') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('update error', err);
			
			res.apiResponse({
				vehicle: item
			});
			
		});
		
	});
}

/**
 * Delete Vehicle by ID
 */
exports.remove = function(req, res) {
	Model.model.findById(req.params.id).exec(function (err, item) {
		
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