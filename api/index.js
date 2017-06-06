/**
 * Created by 143301 on 2017/6/2.
 */
let express = require('express');
let app = express();
let fs = require("fs");
let request = require('request');
let getMovieDetail =require( "./server/getMovieDetail");

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

console.log(getMovieDetail)

// app.get('/getMovieDetail', function (req, res) {
//   console.log(req.query);
//   let params=req.query;
//
// });


// let ipAddress=common.getIPaddress();//本机ip地址
const server = app.listen(8081,function () {
  const host = server.address().address
  const port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})