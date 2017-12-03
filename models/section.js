var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var SectionSchema = new Schema({
	name:{
		type: String,
		required: [true, 'Name Section is required']
	}
});

const Section = mongoose.model('section', SectionSchema);
module.exports = Section;