var express = require('express');
var router = express.Router();
var UserModel = require('../db/user_schema');

router.get('/', function(req, res){
	var obj = req.body;
	res.render('adduser.jade', obj);
});

router.post('/add', function(req, res){
	var obj = req.body;
	var query = {user:req.body.name};
	UserModel.count(query, function(err, doc){
		if(doc ==1){
			res.send(200,'success.jade',{msg:'后台暂时没有，status：'+ doc});
		}else{
			res.send(200, 'success.jade', {msg:'后台已经添加，status：'+ doc});
		}
	});
});

router.post('/getAll', function(req,res){
	UserModel.find(function(err, doc){
		res.send('200',doc);
	});
});

router.post('/insert', function(req, res){
	var param={};
	if(!req.body.user || !req.body.pwd){
		res.send(200, {flag:false, msg:'用户名或密码不能为空！'});
		return;
	}
	param.user = req.body.user;
	param.password = req.body.pwd;
	param.age = req.body.age || 30;
	var newUser = new UserModel(param);
	newUser.save(function(err, result){
		if(err){
			res.send('200', {flag:false, msg:'新增信息出错了！',trace:err});
		}else{
			UserModel.find(function(err, doc){
				res.send('200',doc);
			});
		}
	});
});

module.exports = router;