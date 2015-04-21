var keystone = require('keystone');

exports = module.exports = function(req, res) {
	//keystone.list('Driver').model.findOne({ email: req.body.username }).exec(function(err, driver) {
		return res.send([{"name": "hello", "imgUrl": '/images/drivers/1.jpg'}, {"name": 'hello', "imgUrl": '/images/drivers/1.jpg'}]);
	//})
}