var http = require('http');
var fs = require('fs');
var cheerio = require('cheerio');

var URL = "http...";

http.get(URL,function(res){
    console.log("http stat code ="+res.statusCode);
    res.on('data',function(chunk){
        console.log(chunk.toString());
        var $ = cheerio.load(chunk);
        var arr =[];
        var goal = $("table tb tr");
        goal.each();            
        });
    });
}).on('error',function(e){
    console.log("error:"+e.message);
});