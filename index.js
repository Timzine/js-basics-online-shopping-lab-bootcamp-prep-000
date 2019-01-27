var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var price =  Math.ceil(Math.random() * 100)
 cart.push({[item] : price})
  
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  // write your code here
  var newArray = [];
  
    if ( cart.length === 0 ) 
    
    {
      console.log("Your shopping cart is empty.")
    } 
     for (var i =0; i < cart.length; i++) {
      
      var keys = object.keys(cart[i][0]
      
    
      In your cart, you have ${item} at ${price}.`)
    }else {
      return 
    }
    
      
    
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
