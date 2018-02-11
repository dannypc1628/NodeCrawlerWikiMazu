
var fs = require("fs");
var googleMapsClient = require("@google/maps").createClient({
    key: "a"
});

googleMapsClient.places({
    query: "彰化縣 埤頭鄉 埤頭合興宮"
    }, function(err, response) {
     if (!err) {
       //console.log(response.json.results);
       var data = response.json.results;
       var obj = JSON.stringify(data);
      
      }
    });

// var fs = require('fs');`
// var obj;
//   fs.readFile('data.json', 'utf8', function (err, data) {
//     if (err) throw err;
//     obj = JSON.parse(data);
//     console.log(obj.table[0].county);
//     console.log(obj.table.length);

//     for(var i = 0;i < obj.table.length;i++){
//         googleMapsClient.places({
//             query: "彰化縣 埤頭鄉 埤頭合興宮"
//             }, function(err, response) {
//              if (!err) {
//                console.log(response.json.results);
//               }
//             });
//     }
//   });



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