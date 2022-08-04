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
    var itemName = e.target.closest(".item").getAttribute("data-name");

    var itemPrice = e.target.closest(".item").getAttribute("data-price");

    var product = {
      name: itemName,
      price: itemPrice,
    };
    cart.push(product);
    renderCart();
  }
});

var renderCart = function () {
  var cartList = document.getElementsByClassName("cart-list")[0];

  while (cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }
};
