
var fs = require("fs");

fs.readFile('data3Sort.json', 'utf8', function (err, data) {
    if (err) throw err;
     obj = JSON.parse(data);
    console.log(obj.table[0].county);
    console.log(obj.table.length);
    
    
    obj.table.sort( function(a, b){   
        return parseInt(a.regularYear) > parseInt(b.regularYear) ? 1 : parseInt(a.regularYear) == parseInt(b.regularYear) ? 0 : -1;
    }); 
    setTimeout(save,8000);
    //}
  });


function save(){
    var json = JSON.stringify(obj);

    fs.writeFile('data3SortSort.json', json, 'utf8', function(err){
        if(err){
            console.log(err);
        }
        else{
            console.log("seccess！");
        }
    });
  }