
var fs = require("fs");

var googleMapsClient = require("@google/maps").createClient({
    key: k
});

fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) throw err;
    var obj = JSON.parse(data);
    console.log(obj.table[0].county);
    console.log(obj.table.length);
    var objStr = obj.table;
    //obj.table.length
    for(var i = 1;i < obj.table.length ;i++){
        inputData(obj.table[i],i);
    }
  });

  var obj2 = {
    table: []
 };
  
  function inputData(a,number){
    googleMapsClient.places({
        query: a.county+" "+a.location+" "+a.name,
        language:"zh-TW"
        }, function(err, response) {
            //console.log(objStr[i].county+" "+objStr[i].location+" "+objStr[i].name);
         if (!err) {
           // console.log(a);
            var results = response.json.results;
           // console.log(results[0].name);
           // console.log(results[0].formatted_address);
           // console.log(results[0].geometry.location);

            //obj2.table.push({county: objStr.county, location:objStr.location,name:objStr.name,year:objStr.year,regularYear:objStr.regularYear,note:objStr.note,gps:results[0].geometry.location});
            a.googleName = results[0].name;
            a.address = results[0].formatted_address;
            a.gps = results[0].geometry.location;
            obj2.table.push(a);
            console.log(number);
            console.log(a.googleName);
        }
        });
  }

  function save(){
    var json = JSON.stringify(obj2);
    //console.log(obj.table.length);
    //console.log(obj2.table[0].address);
    //console.log(obj2.table[0].gps);
    //console.log(obj2.table[0].gps.lat);
    //console.log(json);
    
    fs.writeFile('data2.json', json, 'utf8', function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("seccess！");
        }
    });
  }

  setTimeout(save,15000);

