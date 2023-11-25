import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="restaurant"></div>
        <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurants = await RestaurantSource.getDetailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#restaurant');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurants);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurants.id,
        name: restaurants.name,
        description: restaurants.description,
        rating: restaurants.rating,
        city: restaurants.city,
        pictureId: restaurants.pictureId,
      },
    });
  },
};

export default Detail;
