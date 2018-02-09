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
        
        cheerioTable($);
        var data = $(".wikitable").parsetable(true,true,true);
        //   console.log(data[0][1]);
        //   console.log(data[0][2]);
        //   console.log(data.length);
        //   console.log(data[0].length);
 
          var regular=[];
         for(var i = 0;i<data[0].length;i++){

             regular = data[4][i].match('[0-9]{4}');
             var regYear="";
             
             if(regular!=null){
                regYear=regular[0];
             }
             obj.table.push({county: data[0][i], location:data[1][i],name:data[3][i],year:data[4][i],regularYear:regYear,note:data[5][i]});  
        }

        var json = JSON.stringify(obj);
        console.log(json);

        fs.writeFile('data.json', json, 'utf8', function(err){
            if(err){
                console.log(err);
            }
            else{
                console.log("seccess！");
            }
        });
  });
