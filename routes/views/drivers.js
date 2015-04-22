var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'Drivers';
    
    locals.dateFrom = req.body.dateFrom;
    locals.dateTo = req.body.dateTo;
    locals.keyword = req.body.keyword;
	
	// Load the drivers
	view.on('init', function(next) {

		var q = keystone.list('Driver').model.find().where('avaliable', true);
		q.or({"description" : new RegExp(req.body.keyword, "i")}, {"name": new RegExp(req.body.keyword, "i")});
		q.exec(function(err, results) {
            if(results.length === 0) req.flash('warning', 'Driver not found.');
                
			locals.drivers = results;
			next(err);
		});
		
	});
	// Render the view
	view.render('drivers');
}