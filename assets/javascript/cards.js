let article = document.querySelector(".content_food_cards--array");

menu.forEach((element) => {
  // Card creation and set a class
  const card_section = document.createElement("section");
  card_section.setAttribute("class", "cards_section");
  article.append(card_section);

  // The card consists of two sections : "card_section_image" and "card_section_content"
  const card_section_image = document.createElement("section");
  card_section_image.setAttribute("class", "cards_image");
  card_section_image.style.backgroundImage = element.image;
  const card_section_content = document.createElement("section");
  card_section_content.setAttribute("class", "cards_content");

  // Content of card_section_content
  const title_and_price = document.createElement("div");
  title_and_price.setAttribute("class", "title_and_price");
  const category_and_rating = document.createElement("div");
  category_and_rating.setAttribute("class", "category_and_rating");

  card_section.append(card_section_image);
  card_section.append(card_section_content);
  card_section_content.append(title_and_price);
  card_section_content.append(category_and_rating);

  let dish_title = document.createElement("h2");
  let name = document.createTextNode(element.name);
  let p_cat = document.createElement("p");
  let category = document.createTextNode(element.category);
  let p_price = document.createElement("p");
  let price = document.createTextNode(element.price);
  let p_rate = document.createElement("p");
  let rating = document.createTextNode(element.rating);

  p_cat.setAttribute("class", "dish_category");
  p_price.setAttribute("class", "dish_price");
  p_rate.setAttribute("class", "dish_rate");

  title_and_price.appendChild(dish_title);
  title_and_price.appendChild(p_price);
  category_and_rating.appendChild(p_cat);
  category_and_rating.appendChild(p_rate);

  dish_title.appendChild(name);
  p_price.appendChild(price);
  p_cat.appendChild(category);
  p_rate.appendChild(rating);
});
