var keystone = require('keystone');

var Model = keystone.list('Language');

/**
 * List Languages
 */
exports.list = function(req, res) {
	Model.model.find(function(err, items) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse ({
			languages: items
		});
		
	});
}

/**
 * Get Language by ID
 */
exports.get = function(req, res) {
	Model.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		res.apiResponse ({
			language: item
		});
		
	});
}

/**
 * Create a Language
 */
exports.create = function(req, res) {
	
	var item = new Model.model(),
		data = (req.method == 'POST') ? req.body : req.query;
	
	item.getUpdateHandler(req).process(data, function(err) {
		
		if (err) return res.apiError('error', err);
		
		res.apiResponse({
			language: item
		});
		
	});
}

/**
 * Update Language by ID
 */
exports.update = function(req, res) {
	Model.model.findById(req.params.id).exec(function(err, item) {
		
		if (err) return res.apiError('database error', err);
		if (!item) return res.apiError('not found');
		
		var data = (req.method == 'POST') ? req.body : req.query;
		
		item.getUpdateHandler(req).process(data, function(err) {
			
			if (err) return res.apiError('update error', err);
			
			res.apiResponse({
				language: item
			});
			
		});
		
	});
}

/**
 * Delete Language by ID
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