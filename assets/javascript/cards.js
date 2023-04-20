const productsElements = document.querySelector(".content_food_cards--array");
const cartItemsElements = document.querySelector(".shopping_cart_content_import");
const subTotalItems = document.querySelector(".shopping_cart_checkout_sub_total");
const subTotalPrice = document.querySelector(".shopping_cart_checkout_sub_total_price");

function renderProducts(){
  menu.forEach((product) => {
    productsElements.innerHTML += `
      <article class="cards_section add-to-cart" onclick="addToCart(${product.id})">
        <section class="cards_image" style='background-image:${product.image}'></section>
        
        <section class="cards_content">
          <div class="title_and_price">
            <h2>${product.name}</h2>
            <p class="dish_price">${product.price}€</p>
          </div>
          <div class="category_and_rating">
            <p class="dish_category">${product.category}</p>
            <p class="dish_rating" >${product.rating} <span class="dish_rating--stars">&starf;</span></p>
          </div>
        </section>
      </article>
    `
  });
}
renderProducts();

// cart array
let cart = [];

// Add to cart
function addToCart(id){
  // check if product already exists in cart
  if(cart.some((item) => item.id === id)){
    changeNumberOfUnits("plus", id);
  }else{
    const item = menu.find((product) => product.id === id)
    cart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

// update cart
function updateCart(){
  renderCartItems();
  renderSubtotal();
}

function renderSubtotal(){
  let totalPrice = 0, 
  totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subTotalItems.innerHTML = `Nombre d'objets : ${totalItems}`;
  subTotalPrice.innerHTML = `Prix total : ${totalPrice.toFixed(2)}€`;
}

//render cart items
function renderCartItems(){
  cartItemsElements.innerHTML = "" // clear cart element
  cart.forEach((item) =>{
    cartItemsElements.innerHTML +=`
      <article class="cart_section">
        <section class="cart_image" style='background-image:${item.image};' onclick="removeItemFromCart(${item.id})"></section>
        
        <section class="cart_content">
          <div class="title_and_price">
            <h2>${item.name}</h2>
            <p class="dish_price">${item.price}€</p>
          </div>
          <div class="units">
            <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
            <div class="number">${item.numberOfUnits}</div>
            <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>
          </div>
        </section>
      </article>    
    `
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id){
  cart = cart.map((item) => {
    
    let numberOfUnits = item.numberOfUnits;
    
    if(item.id === id){
      if(action === "minus" && numberOfUnits > 1){
        numberOfUnits--;
      }else if(action === "plus"){
        numberOfUnits++;
      }
    }
    return{
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}