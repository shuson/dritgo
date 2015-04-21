var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'Drivers';
    
    locals.dateFrom = req.body.dateFrom;
    locals.dateTo = req.body.dateTo;
	
	// Load the drivers
	view.on('init', function(next) {
		
		var q = keystone.list('Driver').model.find().where('avaliable', true);
		
		q.exec(function(err, results) {

			locals.drivers = results;
			next(err);
		});
		
	});
	// Render the view
	view.render('drivers');
}