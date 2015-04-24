var keystone = require('keystone'),
	Types = keystone.Field.Types,
    baucis = require('baucis'),
    swagger = require('baucis-swagger');

/**
 * Language Model
 * ==========
 */

var Language = new keystone.List('Language');

Language.add({
	name: { type: Types.Text, required: true, index: true }
});

/**
 * Registration
 */

Language.defaultColumns = 'name';
Language.register();
