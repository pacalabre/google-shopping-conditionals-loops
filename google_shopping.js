var data = require("./products.json")
//Question 1
var count=0;
for(var i=0;i<data['items'].length;i++){
    if(data['items'][i].kind === 'shopping#product'){
        count++;
    }
}
console.log(count);


//console.log(data["items"]);
