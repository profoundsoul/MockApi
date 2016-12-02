var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://user:123456@127.0.0.1:27017/mytest');

db.on('error', function(error){
	console.log(error);
});

var Schema = mongoose.Schema;
var userlistSchema = new Schema({
	user:  {type: String},
	password:{type:String},
	age:{type:Number}
});

exports.userList = db.model('users', userlistSchema);
exports.db = db;
