var mongoose = require('mongoose');
var db = mongoose.createConnection('mongodb://apiadmin:password@127.0.0.1:27017/apiContract');

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
