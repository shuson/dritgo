var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Driver Model
 * Aislinn Changed Name
 * ==========
 */

var Driver = new keystone.List('Driver');

Driver.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
    phone: { type: Types.Text, initial: true, required: true, index: true },
	description: { type: Types.Textarea, initial: true },
    createdAt: { type: Date, default: Date.now },
    avaliable: { type: Types.Boolean, initial: true, required: true},
	imgUrl: { type: Types.CloudinaryImage, publicID: 'dritgo', folder: 'images/drivers/'},
    videoUrl: {type: Types.Url, initial: true}
});

/**
 * Registration
 */

Driver.defaultColumns = 'name, email, phone, description, avaliable, createdAt, imgUrl, videoUrl';
Driver.register();
