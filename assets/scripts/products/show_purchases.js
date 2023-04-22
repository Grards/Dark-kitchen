
console.log(cartItemsElements);

function showPurchases() { 
  if((cartItemsElements.childElementCount == "") && ((purchases.style["transform"] ) == "translateX(-100%)" )){
    alert('You have no purchases !');      
  }else{
    purchases.classList.toggle("renderPurchases");
  }
}

cart_shop.addEventListener("click", showPurchases);