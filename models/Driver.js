var keystone = require('keystone'),
	Types = keystone.Field.Types;

/**
 * Driver Model
 * Aislinn Changed Name
 * Aislinn 2nd Change
 * ==========
 */

var Driver = new keystone.List('Driver');

Driver.add({
	name: { type: Types.Name, required: true, index: true },
    nickname: {type: Types.Text, initial: true, label: 'Preferred Name'},
	email: { type: Types.Email, initial: true, required: true, index: true },
    phone: { type: Types.Text, initial: true, required: true },
    //address: { type: Types.Location, initial: true, required: true},
    short_desc: { type: Types.Text, label: 'Short Description', initial: true },
	description: { type: Types.Textarea, label: 'Long Description', initial: true },
    driving_years: { type: Types.Number, label: 'Driving Years', initial: true },
    language_spoken: {type: Types.Relationship, label: 'Language Spoken', ref: 'Language', many: true},
    language_written: {type: Types.Relationship, label: 'Language Written', ref: 'Language', many: true},
    vehicle: {type: Types.Relationship, label: 'Vehicle Type', ref: 'Vehicle', many: true},
    area: {type: Types.Relationship, label: 'City', ref: 'Area', many: true},
    createdAt: { type: Date, default: Date.now },
    avaliable: { type: Types.Boolean, initial: true, required: true},
	imgUrl: { type: Types.CloudinaryImage, publicID: 'dritgo', folder: 'images/drivers/'},
    videoUrl: {type: Types.Url, label:'Video URL', initial: true},
    driverSourceUrl: {type: Types.Url, label: 'Driver Source', initial: true},
    facebook: {type: Types.Url, initial: true},
    wechat: {type: Types.Text, initial: true},
    whatsapp: {type: Types.Text, initial: true}
});

/**
 * Registration
 */

Driver.defaultColumns = 'name, email, phone, description, avaliable, createdAt, imgUrl, videoUrl';
Driver.register();
