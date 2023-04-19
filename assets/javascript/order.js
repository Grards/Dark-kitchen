const shoppingCart = {};

const foodCardsArray = document.querySelectorAll('.cards_section');
console.log(foodCardsArray);
    foodCardsArray.forEach (element => { 
        element.addEventListener('click',(event) => {
        console.log(element);
        console.log(element.firstChild);


        
    });
});
