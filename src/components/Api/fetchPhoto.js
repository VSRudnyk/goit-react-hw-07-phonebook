function fetchPhoto(searchName, page) {
  return fetch(
    `https://pixabay.com/api/?key=25115953-d8d8be010bf370a8ff97eb4f1&q=${searchName}&page=${page}&per_page=12&orientation=horizontal&image_type=photo&pretty=true`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(
      new Error(`Изображение с именем ${searchName} не найдено`)
    );
  });
}

const api = { fetchPhoto };

export default api;
