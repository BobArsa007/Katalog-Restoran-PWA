import CONFIG from '../../globals/config';

function createHomePage(restaurant) {
  return `
    <article tabindex="0" class="post-menu" aria-label="Go to Restaurant ${restaurant.name} the place is ${restaurant.city}. totally rating ${restaurant.rating}. description, ${restaurant.description}">
      <a href="#/restaurant/${restaurant.id}">
        <span class="city">
          <h2><b>${restaurant.city}</b></h2>
        </span>

        <img class="list_restaurant_img"
          src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
          alt="Restaurant Picture ${restaurant.name}">

        <div class="list_restaurant_content">
          <p class="list_restaurant_rating" alt='this rating ${restaurant.rating}'>
            <span>⭐</span>${restaurant.rating}</p>
          
          <h1 class="list_restaurant_title" alt='Name of resto ${restaurant.name}'>
            <h1>${restaurant.name}</h1>
          </h1>
          
          <p class="list_restaurant_description">${restaurant.description}</p>
        </div>
      </a>
    </article>
  `;
}

function createDetailPage(restaurant) {
  return `
    <div class="detail-page">
      <a href="/" class="back-link"><i class="fa-solid fa-right-to-bracket"></i> Back</a>
      <img class="detail-image" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"/>
      <div tabindex="0" class="restaurant-content">
        <h2 class="restaurant-title">${restaurant.name}</h2>
        <p class="restaurant-desc">${restaurant.description}</p>
        <p class="restaurant-rating" alt='this rating ${restaurant.rating}'>
          <span>⭐</span>${restaurant.rating}</p>
        <div class="restaurant-info">
          <br>
          <h3>Detail Information</h3>
          <br>
          <h4>City</h4>
          <p>${restaurant.city}</p>
          <h4>Address</h4>
          <p>${restaurant.address}</p>
          <h4>Categories</h4>
          <p>${restaurant.categories.map((category) => category.name).join(', ')}</p>
          <h4>Menu</h4>
          <p>=> Food <br> ${restaurant.menus.foods.map((food) => food.name).join(', ')}</p>
          <p>=> Drink <br>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</p>
        </div>
      </div>

      <div tabindex="0" id="review-form" class="restaurant-review">
        <h4>Customer Reviews</h4>
        <div id="review-container">
          ${restaurant.customerReviews
    .map(
      (review) => `
                <div class="review-item">
                  <div class="review-header">
                    <p>${review.name}</p>
                    <p>${review.date}</p>
                  </div>
                  <p>${review.review}</p>
                </div>
              `,
    )
    .join('')}
        </div>
        
        <form class="review-form">
          <h4>Add Your Review</h4>
          <div class="form-input">
            <input type="text" name="name" placeholder="Your Name" required>
            <textarea name="review" placeholder="Your Review" required></textarea>
          </div>
          <button type="submit" class="form-submit">Submit Review</button>
        </form>
      </div>
    </div>
  `;
}

function createReviewTemplate(review) {
  return `
    <div class="review">
      <div class="review-header">
        <p>${review.name}</p>
        <p>${review.date}</p>
      </div>
      <p>${review.review}</p>
    </div>
  `;
}

function createLikeRestaurantButton() {
  return `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="far fa-heart" aria-hidden="true"></i>
    </button>
  `;
}

function createLikedRestaurantButton() {
  return `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;
}

function createLoading() {
  return `
    <div class="loading">
      loading...
      <img src="images/loading.gif" alt="loading"/>
    </div>
  `;
}

export {
  createHomePage,
  createDetailPage,
  createLikeRestaurantButton,
  createLikedRestaurantButton,
  createLoading,
  createReviewTemplate,
};
