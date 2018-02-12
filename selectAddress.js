
var fs = require("fs");

var googleMapsClient = require("@google/maps").createClient({
    key: k
});


var fs = require('fs');
var obj;
  fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
    console.log(obj.table[0].county);
    console.log(obj.table.length);
    var objStr = obj.table;
    //obj.table.length
    for(var i = 4;i < 6 ;i++){
        googleMapsClient.places({
            query: objStr[i].county+" "+objStr[i].location+" "+objStr[i].name,
            language:"zh-TW"
            }, function(err, response) {
                //console.log(objStr[i].county+" "+objStr[i].location+" "+objStr[i].name);
             if (!err) {
                
                var results = response.json.results;
                console.log(results[0].name);
                console.log(results[0].formatted_address);
                console.log(results[0].geometry.location);
              }
            });
    }
  });



// googleMapsClient.places({
//     query: "彰化縣 埤頭鄉 埤頭合興宮"
//   }, function(err, response) {
//     if (!err) {
//       console.log(response);
//     }
//   });



//var data.results.formatted_address.;

//var data.results[geometry]
// for(var i =0;i<data.length;i++){

// }