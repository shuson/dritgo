var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Vehicle Model
 * ==========
 */

var Vehicle = new keystone.List('Vehicle');

Vehicle.add({
	name: { type: Types.Text, required: true, index: true }
});

/**
 * Registration
 */

Vehicle.defaultColumns = 'name';
Vehicle.register();