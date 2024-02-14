import { countCartItem } from "../../data/cart.js";

export function renderCheckoutHeader() {
  const totalCartItem = countCartItem();
  let html = `
     Checkout (<a class="return-to-home-link" href="amazon.html">${totalCartItem} items</a
          >)
   `;
  document.querySelector(".js-checkout-header-middle-section").innerHTML = html;
}
