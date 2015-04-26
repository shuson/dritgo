var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Area Model
 * ==========
 */

var Area = new keystone.List('Area');

Area.add({
	name: { type: Types.Text, required: true, index: true }
});

/**
 * Registration
 */

Area.defaultColumns = 'name';
Area.register();