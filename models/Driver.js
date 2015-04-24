var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Driver Model
 * ==========
 */

var Driver = new keystone.List('Driver');

Driver.add({
	name: { type: Types.Name, required: true, index: true },
	email: { type: Types.Email, initial: true, required: true, index: true },
    phone: { type: Types.Text, initial: true, required: true, index: true },
	description: { type: Types.Textarea, initial: true },
    driving_years: { type: Types.Number, label: 'Driving Years', initial: true },
    language_spoken: {type: Types.Relationship, label: 'Language Spoken', ref: 'Language', many: true},
    language_written: {type: Types.Relationship, label: 'Language Written', ref: 'Language', many: true},
    vehicle: {type: Types.Relationship, label: 'Vehicle Type', ref: 'Vehicle', many: true},
    createdAt: { type: Date, default: Date.now },
    avaliable: { type: Types.Boolean, initial: true, required: true},
	imgUrl: { type: Types.CloudinaryImage, publicID: 'dritgo', folder: 'images/drivers/'},
    videoUrl: {type: Types.Url, initial: true},
    facebook: {type: Types.Url, initial: true},
    wechat: {type: Types.Text, initial: true},
    whatsapp: {type: Types.Text, initial: true}
});

/**
 * Registration
 */

Driver.defaultColumns = 'name, email, phone, description, avaliable, createdAt, imgUrl, videoUrl';
Driver.register();
