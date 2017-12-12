var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name:{
		type: String,
		required: [true, 'Name User is required']
	},
	identification:{
		type:Number,
		required: [true, 'Password User is required']
	},
	password:{
		type:String,
		required: [true, 'Password User is required']
	},
	permission:{
		type:String,
		required: [true, 'Permission User is required']
	},
	state:{
		type:Boolean,
		required: [true, 'State User is required']
	}
});

const User = mongoose.model('user', UserSchema);
module.exports = User;