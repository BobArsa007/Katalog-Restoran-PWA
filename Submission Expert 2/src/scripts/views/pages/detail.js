import RestoSource from '../../data/resto-source';
import UrlParser from '../../routes/url-parser';
import {
  createDetailPage,
  createLoading,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="loading"></div>
      <div tabindex="0" id="restaurant" class="restaurant">
        <div tabindex="0" id="resto-detail" class="restaurant"></div>
        <div class="like" id="likeButton"></div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantAll = document.querySelector('#restaurant');
    const restaurantContainer = document.querySelector('#resto-detail');
    const loading = document.querySelector('#loading');

    loading.innerHTML = createLoading();
    restaurantAll.style.display = 'block';

    try {
      const data = await RestoSource.detail(url.id);

      loading.style.display = 'none';
      restaurantContainer.style.display = 'block';

      restaurantContainer.innerHTML += createDetailPage(data.restaurant);

      LikeButtonInitiator.init({
        likeButton: document.querySelector('#likeButton'),
        data,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default Detail;
