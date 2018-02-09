var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');

var URL = "https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E5%AA%BD%E7%A5%96%E4%BF%A1%E4%BB%B0";

https.get(URL,function(res){
    console.log("http stat code ="+res.statusCode);
    res.on('data',function(chunk){
        //console.log(chunk.toString());
        var $ = cheerio.load(chunk);
        var arr =[];
        var goal = $(".wikitable tr td");
        goal.each(function(i,ele){
            console.log($(this).text());
        });            
    });
}).on('error',function(e){
    console.log("error:"+e.message);
});