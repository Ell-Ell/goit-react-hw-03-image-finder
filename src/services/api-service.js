import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22940348-1b20cc5115637f53696a8a841';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

const fetchImage = async ({ searchQuery, page }) => {
  return await axios
    .get('', {
      params: {
        q: searchQuery,
        page: page,
      },
    })
    .then(response => response.data.hits);
};

export default fetchImage;
