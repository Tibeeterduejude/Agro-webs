let cart = [];

function addToCart(item) {
    cart.push(item);
}
let list = getelementById("cart-list");
function displayCart() {
    list.innerHTML = "";
    foreach.addToCart(item) {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }
