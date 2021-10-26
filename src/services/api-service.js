function fetchImages(
  text,
  page,
  per_page = 12,
  API_KEY = '22940348-1b20cc5115637f53696a8a841',
) {
  return fetch(
    `https://pixabay.com/api/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${per_page}`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
}

const imagesAPI = { fetchImages };

export default imagesAPI;
