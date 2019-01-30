var express= require('express');
var app= express();
var url=require('url');
var path=require('path');
var fs=require('fs');
app.use(express.static('public'));
app.use('/index.css',express.static(__dirname+'/public/assets'));

app.get('/', function (req, res){

	res.sendFile('index.html',{root:path.join(__dirname,'./view')});

})
var server= app.listen(8081, function(){
	var host=server.address().address
	var port=server.address().port
	console.log('Example app listening at http://127.0.0.1:8081');
})