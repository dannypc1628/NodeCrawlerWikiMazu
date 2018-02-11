var googleMapsClient = require('@google/maps').createClient({
    key: key2
  });

googleMapsClient.places({
    query: '彰化縣 埤頭鄉 埤頭合興宮'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });

var url = g1+a+"+"+b+"+"+c+"&key="+key2;
console.log(gaa);
console.log(url);

//   request(gaa,function(err, res, body){
//      //console.log(res);
//      var data = JSON.stringify(body);
//      console.log(data);
//   });


//var data.results.formatted_address.;

//var data.results[geometry]
// for(var i =0;i<data.length;i++){

// }