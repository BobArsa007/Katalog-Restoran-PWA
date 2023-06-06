import RestoIdb from '../data/resto-idb';
import {
  createLikeRestaurantButton,
  createLikedRestaurantButton,
} from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButton, data }) {
    this._likeButton = likeButton;
    this._restaurant = data.restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await RestoIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._likeButton.innerHTML = createLikeRestaurantButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestoIdb.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButton.innerHTML = createLikedRestaurantButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await RestoIdb.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;
