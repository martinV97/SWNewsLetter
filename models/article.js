var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
	name:{
		type: String,
		required: [true, 'Name Article User is required']
	},
	date:{
		type:Date,
		required: [true, 'Date Article User is required']
	},
	abstract:{
		type:String,
		required: [true, 'Abstract Article is required']
	},
	text:{
		type:Boolean,
		required: [true, 'Text Article is required']
	},
	keywords:{
		type:String,
		default: 'Nothing'
	}
});

const Article = mongoose.model('article', ArticleSchema);
module.exports = Article;