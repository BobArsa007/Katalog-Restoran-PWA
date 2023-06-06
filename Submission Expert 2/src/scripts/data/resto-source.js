import API_ENDPOINT from '../globals/api-endpoint';

const RestoSource = {
  async home() {
    try {
      const response = await fetch(API_ENDPOINT.GET_ALL_RESTAURANTS);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (error) {
      console.log(error);
      return [];
    }
  },

  async detail(id) {
    try {
      const response = await fetch(API_ENDPOINT.GET_RESTAURANT(id));
      return response.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  },

  async postReview(data) {
    try {
      console.log(data);
      await fetch(API_ENDPOINT.SEND_REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default RestoSource;
