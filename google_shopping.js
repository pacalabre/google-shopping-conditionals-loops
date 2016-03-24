var data = require("./products.json")
////To print JSON, remove comments below
//console.log(data["items"]);

//Question 1
/*var count=0;
for(var i=0;i<data['items'].length;i++){
    if(data['items'][i].kind === 'shopping#product'){
        count++;
    }
}
console.log(count);*/



//Question 2
/*
2.) Find all items with a backorder availability in inventories.
*/

// for(var i=0; i < data['items'].length; i++) {
//   var inventories = data['items'][i].product.inventories;
//   for(var j = 0; j < inventories.length;j++) {
//     if(inventories[j].availability === "backorder"){
//     console.log(inventories[j]);
//     }
//   }
// }



//Question 3
/*
3.) Find all items with more than one image link.
*/

// for(var i = 0; i < data['items'].length; i++) {
//   var images = data['items'][i].product.images;
//     if(images.length > 1){
//       console.log(images);
//   }
// }
