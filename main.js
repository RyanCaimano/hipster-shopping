var viewCartButton = document.getElementsByClassName("view-cart")[0];
var shoppingCart = document.getElementsByClassName("shopping-cart")[0];
var products = document.getElementsByClassName("products")[0];

var cart = [];

viewCartButton.addEventListener("click", function () {
  if (shoppingCart.classList.contains("show")) {
    shoppingCart.className = "shopping-cart";
  } else {
    shoppingCart.className += " show";
  }
});

products.addEventListener("click", function (e) {
  if (e.target.classList.contains("add-to-cart")) {
    // TODO: get value of product name
    // TODO: get value of product price
    // TODO: built object based on name and price
    // TODO: push object into _cart_ array
  }
});
