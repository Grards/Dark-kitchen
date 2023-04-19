
let article = document.querySelector('.content_food_cards--array');


menu.forEach(element => {
    const section = document.createElement('section'); 
    const section_image = document.createElement('section');
    section_image.setAttribute('class', 'cards_image'); 
    section_image.style.backgroundImage = element.image ; 
    const section_content = document.createElement('section'); 
    section_content.setAttribute('class', 'cards_content');
    section.append(section_image); 
    section.append(section_content);
    article.append(section);
    let dish_title = document.createElement('h2');
    let name = document.createTextNode(element.name);
    dish_title.appendChild(name);
    section_content.appendChild(dish_title); 
    let p_cat = document.createElement('p');
    p_cat.setAttribute('class', 'dish_category'); 
    let category = document.createTextNode(element.category);
    p_cat.appendChild(category);
    section_content.appendChild(p_cat); 
    let p_price = document.createElement('p');
    p_price.setAttribute('class', 'dish_price');
    let price = document.createTextNode(element.price);
    p_price.appendChild(price);
    section_content.appendChild(p_price); 
    let p_rate = document.createElement('p');
    p_rate.setAttribute('class', 'dish_rate'); 
    let rating = document.createTextNode(element.rating);
    p_rate.appendChild(rating);
    section_content.appendChild(p_rate); 
    
}); 