var express = require('express');
var router = express.Router();

router.all('/*', function(req, res, next){
	debugger;
	res.writeHead(200, {'content-type':'application/json'});
	res.end('hello world!');
});

module.exports=router;