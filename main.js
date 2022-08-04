var viewCartButton = document.getElementsByClassName("view-cart")[0];
var shoppingCart = document.getElementsByClassName("shopping-cart")[0];
var products = document.getElementsByClassName("products")[0];

var cart = [];
var total = 0;

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
    total += parseInt(product.price);
    renderCart();
    renderTotal();
  }
});

var renderCart = function () {
  var cartList = document.getElementsByClassName("cart-list")[0];

  while (cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }

  var items = "";

  for (var i = 0; i < cart.length; i++) {
    items += "<div>" + cart[i].name + " - $" + cart[i].price + "</div>";
  }

  cartList.innerHTML = items;
};

var renderTotal = function () {
  var totalElement = document.getElementsByClassName("total")[0];
  totalElement.innerHTML = total;
};
