var productViews = new WeakMap();

var cartItems  = new WeakSet();

function incrementProductViews(productId) {
  if (productViews.has(productId)) {
    let current = productViews.get(productId);
    productViews.set(productId, current + 1);
    total_views = current+1
    console.log( "Product ID "+ productId.item_id +" is viewed for "+ total_views +" time");
  } else {
    productViews.set(productId, 1);
    console.log("Product ID "+ productId.item_id + " is viewed for the first time");
  }
}

function addToCart(productId) {
  if (cartItems.has(productId)) {
    return "Product already in cart";
  } else {
    cartItems.add(productId);
    return "Product added to cart";
  }
}

const productId1 = {"item_id":123};

incrementProductViews(productId1);
incrementProductViews(productId1);

console.log(addToCart(productId1)); 
console.log(addToCart(productId1)); 