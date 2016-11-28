var express = require('express');
var path = require('path');
var Mock = require('mockjs');
exports.mock=function(req,res){
	var contract = {};
	Object.assign(contract, getCommonContract());
	var data = Mock.mock(contract);
	return data;
}


function getCommonContract(){
	var common = {};
	common['flag|1-2'] = true;
	common['msg'] = Mock.Random.ctitle(0,20);
	return common;
}

