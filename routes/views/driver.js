var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {
	
	var view = new keystone.View(req, res),
		locals = res.locals;
	
	// Init locals
	locals.section = 'Driver';
	
	// Load the drivers
	view.on('init', function(next) {

		var q = keystone.list('Driver').model;
        console.log();
        q.findById(req.params.id, function (err, driver) {
            locals.driver = driver;
            next(err);
        });
		
	});
	// Render the view
	view.render('driverDetail');
}