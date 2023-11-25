import FAVORITE_RESTAURANT from '../../data/fav-restaurant';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorit = {
  async render() {
    return `
        <h2>List Restoran Favorit Anda</h2>
  
          <div class="card" id="rest">
        
        </div>
    `;
  },

  async afterRender() {
    const restaurants = await FAVORITE_RESTAURANT.getAllRestaurant();
    const restaurantContainer = document.querySelector('#rest');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorit;
