import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" class="detail_poster" alt="${restaurant.name}" crossorigin="anonymous">
    <div>
        <h2 class="detail_title">${restaurant.name} - ${restaurant.city}</h2>
        <p class="detail_location">${restaurant.address}</p></div>
    <div class="detail_description">
        <p class="detail_rating">
        Rating :
        <a class="fas fa-star">${restaurant.rating}</a>
        </p>
        <p class="detail_overview">${restaurant.description}</p>
        <p class="detail_category"> Categories : ${restaurant.categories.map((category) => `<span> ${category.name}</span>`)}</p>
    </div>
    </div>
  </div>

<br>
<h2 class="headingMain">Menu's</h2>
  <div class="menu">
  <div class="menu_food">
  <h3>Food's</h3>
  ${restaurant.menus.foods.map((food, i) => `
  <p class="menu_list">${i + 1}. ${food.name}</p>
  `).join('')}
    </div>

    <div class="menu_drink">
    <h3>Drink's</h3>
  ${restaurant.menus.drinks.map(
    (drinks, i) => `
  <p class="menu_list">${i + 1}. ${drinks.name}</p>
  `,
  )
    .join('')}
    </div>  
  </div>

<h2 class="headingMain">Review</h2>
<div class="detail_reviewContainer">
  ${restaurant.customerReviews.map((review) => `
  <div class="detail_review">
  <div class="detail_name">
  <h3 class="detail_rName">${review.name}</h3> 
  <p class="detail_time">${review.date}</p>
  </div>
  <div class="review_container">
  <p>${review.review}</p>
  </div>
  </div>
  `).join('')}
  </div>
  
  </div>
`;
const createRestaurantListTemplate = (restaurant) => `
<div class="card_item">
<img class="card_item_thumb" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
<div class="city">${restaurant.city}</div>
<div class="card_item_content">
    <p class="card_item_rating">
        Rating :
        <a class="fas fa-star">${restaurant.rating}</a>
    </p>
    <h1 class="card_item_title"><a href="#/detail/${restaurant.id}">${restaurant.name}</a></h1>
    <div class="card_item_desc">${restaurant.description}</div>
</div>
</div>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart with" aria-hidden="true"></i>
  </button>
`;

const createInputForm = () => `
<section>
<div class="input">
  <form id="fromAction" action="#">
    <p for="name">Name</p>
    <input class="input_name" id="name" type="text" placeholder="Name" tabindex="0" aria-label="name" maxlength="12" ><br>
    <p for="description">Description</p>
    <textarea name="review" id="input_review" cols="30" rows="25" aria-label="description" placeholder="Review.."></textarea><br>
    <button type="submit" aria-label="submit">Submit</button>
  </form>
</div>
</section>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikedButtonTemplate,
  createLikeButtonTemplate,
  createInputForm,
};
