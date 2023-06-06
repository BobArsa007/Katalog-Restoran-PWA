import CONFIG from './config';

const API_ENDPOINT = {
  GET_RESTAURANT: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  GET_ALL_RESTAURANTS: `${CONFIG.BASE_URL}list`,
  SEND_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default API_ENDPOINT;
