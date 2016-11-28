var express = require('express');
var router = express.Router();
var mockApi = require('../controller/mockData');

router.all('/*', function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    if(req.method=="OPTIONS"){
    	res.writeHead(200, {'content-type':'application/json'});/*让options请求快速返回*/	
    	res.end();
    }else{
    	res.writeHead(200,{'content-type':'application/json'});
		res.end(JSON.stringify(mockApi.mock(req,res)));	
    }
});

module.exports=router;