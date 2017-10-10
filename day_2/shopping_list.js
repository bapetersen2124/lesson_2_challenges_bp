var shoppingList = ["pop tarts","ramen noodles","chips,","salsa","coffee"];
var shoppingCart = [];

shoppingList.push("fruit loops");
shoppingList[4] = "fair trade coffee";
shoppingList.splice(2,2, "rice","beans");
shoppingCart.push(shoppingList.pop());
shoppingCart.push(shoppingList.shift());

while (shoppingList.length > 0) {
  shoppingCart.push(shoppingList.pop());
}

console.log(shoppingCart.sort().reverse());

console.log(shoppingList);
console.log(shoppingCart.toString(","));
