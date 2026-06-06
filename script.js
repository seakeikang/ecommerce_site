let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({name, price});
  total += price;
  updateCart();
}

function updateCart() {
  document.getElementById("cart-count").innerText = cart.length;

  let list = document.getElementById("cart-items");
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.innerText = item.name + " - $" + item.price;
    list.appendChild(li);
  });

  document.getElementById("total").innerText = total;
}

function checkout() {
  if(cart.length === 0){
    alert("Cart is empty!");
  } else {
    alert("Thank you for your purchase! 🛍️");
    cart = [];
    total = 0;
    updateCart();
  }
}
