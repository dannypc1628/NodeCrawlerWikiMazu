var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');
var cheerioTable = require('cheerio-tableparser');
var request = require("request");

var URL = "https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E5%AA%BD%E7%A5%96%E4%BF%A1%E4%BB%B0";

request(URL, (err, res, body) => {
    //console.log(body);
    var $ = cheerio.load(body);
        var arr =[];
        $(".wikitable tbody tr").each(function(i,ele){
            console.log($(this).text().split("\n"));
        });
  });
