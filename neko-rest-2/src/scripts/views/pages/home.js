import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <h2>Explore Restaurant</h2>
      <div class="card" id="rest"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantContainer = document.querySelector('#rest');
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
