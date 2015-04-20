var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'Drivers';
    
    locals.dateFrom = req.body.dateFrom;
    locals.dateTo = req.body.dateTo;

	locals.drivers = [];
	
	// Load the drivers
	view.on('init', function(next) {
		
		var q = keystone.list('Driver').paginate({
				page: req.query.page || 1,
 				perPage: 10,
 				maxPages: 10
			})
			.where('status', 'avaliable');
		
		q.exec(function(err, results) {
			locals.drivers = results;
			next(err);
		});
		
	});
	console.log(locals.drivers.length);
	// Render the view
	view.render('drivers');
	
}