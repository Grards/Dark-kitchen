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
            <p class="dish_rating">${product.rating}</p>
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

// menu.forEach((element) => {
//   // Card creation and set a class
//   const card_section = document.createElement("section");
//   card_section.setAttribute("class", "cards_section");
//   article.append(card_section);

//   // The card consists of two sections : "card_section_image" and "card_section_content"
//   const card_section_image = document.createElement("section");
//   card_section_image.setAttribute("class", "cards_image");
//   card_section_image.style.backgroundImage = element.image;
//   const card_section_content = document.createElement("section");
//   card_section_content.setAttribute("class", "cards_content");

//   // Content of card_section_content
//   const title_and_price = document.createElement("div");
//   title_and_price.setAttribute("class", "title_and_price");
//   const category_and_rating = document.createElement("div");
//   category_and_rating.setAttribute("class", "category_and_rating");

//   card_section.append(card_section_image);
//   card_section.append(card_section_content);
//   card_section_content.append(title_and_price);
//   card_section_content.append(category_and_rating);

//   let dish_title = document.createElement("h2");
//   let name = document.createTextNode(element.name);
//   let p_cat = document.createElement("p");
//   let category = document.createTextNode(element.category);
//   let p_price = document.createElement("p");
//   let price = document.createTextNode(element.price);
//   let p_rate = document.createElement("p");
//   let rating = document.createTextNode(element.rating);

//   p_cat.setAttribute("class", "dish_category");
//   p_price.setAttribute("class", "dish_price");
//   p_rate.setAttribute("class", "dish_rate");

//   title_and_price.appendChild(dish_title);
//   title_and_price.appendChild(p_price);
//   category_and_rating.appendChild(p_cat);
//   category_and_rating.appendChild(p_rate);

//   dish_title.appendChild(name);
//   p_price.appendChild(price);
//   p_cat.appendChild(category);
//   p_rate.appendChild(rating);
// });
