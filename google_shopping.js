//var data = require("./products.json")
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




//Question 4
/*
4.) Find all canon products in the items (careful with case sensitivity).
*/

// for(var i=0; i < data['items'].length; i++) {
//   var brand = data['items'][i].product.brand;
//   //console.log(brand);
//   if(brand === 'Canon') {
//     console.log(brand);
//  }
// }




//Question 5
/*
5.) Find all items that have product author name of "eBay" and are brand "Canon".
*/

  // for(i=0; i<data['items'].length; i++) {
  //   var product = data['items'][i].product;
  //   var author = console.log(data['items'][i].product.author.name[0].indexOf('ebay'));
  //   var brand = data['items'][i].product.brand;
  //    //console.log(author);
  //   if (brand==="Canon" && data['items'][i].product.author.name[0].indexOf('ebay')) {
  //     console.log(data['items'][i].product);
  //   }
  // }




//Question 6
/*
6.) Print all the products with their brand, price, and a image link
*/

  // for(i=0; i < data['items'].length; i++) {
  //   brand = data['items'][i].product.brand;
  //   price = data['items'][i].product.inventories[0].price;
  //   image = data['items'][i].product.images[0].link;
  //   console.log('The brand is '+brand+','+'The price is '+price+','+" and the images are "+image);
  // }



/*********************************************************************************************************
THE ABOVE CODE I DID AFTER CLASS AT GA, BUT I GOT A LOT OF HELP FROM A CLASSMATE. I DIDN'T FULLY "GET IT,"
SO BELOW YOU WILL SEE THE ASSIGNMENT REDONE, ALONE - FOR RETAINMENT AND LEARNING SAKE. I DID NOT REDO THE
FIRST QUESTION, SINCE THAT ONE WAS DONE IN CLASS. THE ONLY ONE THAT I WAS UNABLE TO DO WAS QUESTION 2, WHICH
THREW ME FOR A LOOP (baaa dum *cymbal crash!*) THE BIGGEST THING THAT I STRUGGLED WITH WAS PROBABLY THE
DEGREE OF NESTED OBJECTS AND ARRAYS, BUT I THINK THAT'LL GET BETTER IN TIME.
**********************************************************************************************************/




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



//Question 2 Didn't get it
/*
2.) Find all items with a backorder availability in inventories.
*/
//var inventories = data['items'][i].product.inventories;
// for(var i = 0; i < data['items'].length; i++) {
//   for (var j = 0; j < product.length; j++) {
//   var product = data['items'][i].product;
//   var inventory=data['items'][i].product.inventories[j].availability;
//   //console.log(products.length);
//   }

//}



//Question 3 Got it
/*
3.) Find all items with more than one image link.
*/

// for (var i = 0; i < data['items'].length; i++) {
//   items = data['items'][i].product.images.length;
//   if(items>2) {
//   console.log(items);
//   }
// }




//Question 4 Got it
/*
4.) Find all canon products in the items (careful with case sensitivity).
*/

// for (var i = 0; i < data['items'].length; i++) {
//   items = data['items'][i].product.brand;
//   if(items === 'Canon') {
//     console.log(items);
//   }
// }



//Question 5 Got it
/*
5.) Find all items that have product author name of "eBay" and are brand "Canon".
*/

// for(var i =0; i < data['items'].length;i++) {
//   product = data['items'][i].product.author.name;
//   var brand = data['items'][i].product.brand;
//   var author = data['items'][i].product.author.name.indexOf('eBay');
//   //console.log(product);
//   if (brand === 'Canon' && author === 0) {
//     console.log("the brand is "+brand+"."+"The store is "+product+".");
//   }

// }





//Question 6 Got it
/*
6.) Print all the products with their brand, price, and a image link
*/
// for(var i =0; i < data['items'].length; i++) {
//   var brand = data['items'][i].product.brand;
//   var price = data['items'][i].product.inventories[0].price;
//   var images = data['items'][i].product.images[0].link;
//   console.log("The product brand is "+brand+", "+"The product price is "+price+", "+"and the image is: "+ images);
// }


