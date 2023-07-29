// Funkcja tworząca zawartość dla modala karty filmu
function createModalContent(filmData) {
  const modalContent = `
      <h1 class="modal_film_card">${filmData.title}</h1>
      <div class="modal-film__container">
        <div class="modal-film__card">
          <button type="button" class="modal-film__button">
            <!-- <svg class="modal-film__close-icon">
              <use href="./images/icons.svg#icon-close-black-18dp-2-1"></use>
            </svg> -->
          </button>
          <ul class="modal-film__list">
            <li class="modal-film__item">
              <img class="modal-film__img" src="${IMG_URL}${filmData.poster_path}" alt="" />
            </li>
            <li class="modal-film__item">
              <h2 class="modal-film__title">${filmData.title}</h2>
            </li>
            <div class="modal-film__content">
              <ul class="modal-film__content-left">
                <li class="modal-film__content-text">Vote / Votes</li>
                <li class="modal-film__content-text">Popularity</li>
                <li class="modal-film__content-text">Original Title</li>
                <li class="modal-film__content-text">Genre</li>
              </ul>
              <ul>
                <div class="modal-film__rate" >
                  <li class="modal-film__rate-content">${filmData.vote_average}</li>
                  <li class="modal-film__rate-content">/</li>
                  <li class="modal-film__rate-content">${filmData.vote_count}</li>
                </div>
                <li class="modal-film__rate-content">${filmData.popularity}</li>
                <li class="modal-film__rate-content">${filmData.original_title}</li>
                <li class="modal-film__rate-content">${filmData.genre}</li>
              </ul>
            </div>
            <li class="modal-film__item">
              <p>About</p>
            </li>
            <li class="modal-film__item">
              <p>${filmData.overview}</p>
            </li>
          </ul>
          <div class="modal-film__button">
            <button class="btn__modal" type="button">ADD TO WATCHED</button>
            <button class="btn__modal" type="button">ADD TO QUEUE</button>
          </div>
        </div>
      </div>
    `;

  // Ustawienie zawartości modala na podstawie wygenerowanego kodu HTML
  const modalFilmCard = document.querySelector('.modal-film__card');
  modalFilmCard.innerHTML = modalContent;
}

// Funkcja do pobierania danych filmu z API po podanym ID
//async function getMovieDataById(id) {
//try {
// const movieData = await fetchMoviesByID(id);
// createModalContent(movieData);
// } catch (error) {
//  console.error('Wystąpił błąd podczas pobierania danych filmu:', error);
// }
//}
