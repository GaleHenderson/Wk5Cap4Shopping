var cart = [];
var cost = [];

function addToCart(selection,price){
  cart.push(selection);
  cost.push(price);
}


function showCart(){
for (var i = 0; i < cart.length; i++) { 
  var newEl = document.getElementById("test").appendChild(document.createElement("p"));
  newEl.innerHTML = cart[i] + " $" + cost[i].toFixed(2);
   }
  
  function showCost(){
    for (var i = 0; i < cost.length; i++) { 
      var sum = sum + i;
      document.getElementById("test").innerHTML = "$" + sum;
    }
  }