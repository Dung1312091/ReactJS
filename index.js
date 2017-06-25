var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var parser = bodyParser.urlencoded({extended: false});
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views","./views");
app.listen(3000,function(){
	console.log("connect sussecs");
});
app.get("/",function(req,res){
	res.render("home");
});
app.get("/baitap1",function(req,res){
	res.render("baitap1");
});
app.get("/baitap2",function(req,res){
	res.render("baitap2");
});
app.get("/baitap3",function(req,res){
	res.render("baitap3");
});
app.get("/baitap4",function(req,res){
	res.render("baitap4");
});
app.get("/baitap5",function(req,res){
	res.render("baitap5");
});
var mang =["Android","IOS","Nodejs","React"];
app.get("/quanlyghichu",function(req,res){
	res.render("quanlyghichu");
});
app.post("/noidungquanlyghichu",function(req,res){
	res.send(mang);
});
app.post("/add",parser,function(req,res){
	 var nd = req.body.note;
	 mang.push(nd);
	 res.send(mang);
});
app.post("/delete",parser,function(req,res){
	 var id = req.body.idxoa;
	 mang.splice(id,1);//xoa phan tu
	 res.send(mang);
});
app.post("/update",parser,function(req,res){
	 var idSua = req.body.idSua;
	 mang[idSua]=req.body.noidung;
	 console.log(idSua,mang[idSua]);
	 res.send(mang);
});
