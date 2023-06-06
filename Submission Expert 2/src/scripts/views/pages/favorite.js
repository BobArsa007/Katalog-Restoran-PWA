import RestoIdb from '../../data/resto-idb';
import {
  createHomePage,
} from '../templates/template-creator';

const Favorite = {
  render: async () => {
    const restaurants = await RestoIdb.getAllRestaurants();
    const restaurantContent = restaurants.length
      ? restaurants.map((restaurant) => createHomePage(restaurant)).join('')
      : '<div class="notfound"><p>You dont have favorite restaurant</p></div>';

    return `
      <div class="hero">
        <div class="hero__iner">
          <h1 class="hero__title">GastroGuide</h1>
          <p class="hero__tagline">Indulge in Gastronomic Delights</p>
        </div>
      </div>
      <section id="content" class="headline">
        <h1 class="headline_tagline">Favorite Restaurant</h1>
        <div class="form">
          <div class="list">
            <div class="menu" id="restaurant">${restaurantContent}</div>
          </div>
        </div>
      </section>
    `;
  },

  afterRender: async () => {
    const restaurants = await RestoIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurant');

    try {
      restaurantsContainer.innerHTML = '';

      restaurants.forEach((restaurant) => {
        const restaurantElement = createHomePage(restaurant);
        restaurantsContainer.innerHTML += restaurantElement;

        const existingRestaurant = restaurantsContainer.querySelector(`[data-id="${restaurant.id}"]`);
        if (!existingRestaurant) {
          restaurantsContainer.appendChild(restaurantElement);
        }
      });

      if (restaurants.length === 0) {
        restaurantsContainer.innerHTML += `
          <div class="notfound">
            <p>You dont have favorite restaurant</p>
          </div>
        `;
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default Favorite;
