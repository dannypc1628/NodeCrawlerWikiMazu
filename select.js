var https = require('https');
var fs = require('fs');
var cheerio = require('cheerio');
var cheerioTable = require('cheerio-tableparser');
var request = require("request");

var URL = "https://zh.wikipedia.org/wiki/%E5%8F%B0%E7%81%A3%E5%AA%BD%E7%A5%96%E4%BF%A1%E4%BB%B0";

request(URL, (err, res, body) => {
    //console.log(body);
        var $ = cheerio.load(body);
        var obj = {
            table: []
         };

        // $(".wikitable tbody tr").each(function(i,ele){
        //     console.log($(this).text().split("\n"));
        // });

        // $(".wikitable tbody tr").each(function(i,ele){
        //     console.log($(this).eq(0).text()+"  "+$(this).eq(1).text()+" "+$(this).eq(2).text()+" "+$(this).eq(3).text());
        // });

        
        cheerioTable($);
        var data = $(".wikitable").parsetable(true,true,true);
        //  console.log(data[0][0]);
        //  console.log(data.length);
        //  console.log(data[0].length);
 
         for(var i = 0;i<data[0].length;i++){
             for(var j = 0 ; j < data.length ; j++){
                if(j!=2){
                    console.log(data[j][i]);
                }
                    
             }
             console.log("\n");
         }
  });
