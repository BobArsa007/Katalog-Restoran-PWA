import RestoSource from '../../data/resto-source';
import {
  createHomePage,
} from '../templates/template-creator';

const Home = {
  async render() {
    const heroSection = `
      <div class="hero">
        <div class="hero__inner">
          <h1 class="hero__title">GastroGuide</h1>
          <p class="hero__tagline">Indulge in Gastronomic Delights</p>
        </div>
      </div>
    `;

    const contentSection = `
      <section id="content" class="headline">
        <h1 class="headline_tagline">Explore Restaurant</h1>
        <div class="form"> 
          <div class="list">
            <div class="menu" id="restaurant"> </div>
          </div>
        </div>
      </section>
    `;

    return `${heroSection}${contentSection}`;
  },

  async afterRender() {
    const restaurants = await RestoSource.home();
    const restaurantList = document.querySelector('#restaurant');

    restaurants.forEach((restaurant) => {
      restaurantList.innerHTML += createHomePage(restaurant);
    });
  },
};

export default Home;
