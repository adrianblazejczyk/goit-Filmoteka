const gallery = document.querySelector('.section-films__list');

export function createFilmCards(films) {
  const markupImages = films.results
    .map(
      film => `
      <li class="film-card"><a href="" data-id="${film.id}"> 
            <img class="film-card__img" src="${IMG_URL}${film.poster_path}" alt="${
        film.overview
      }" title="${film.title}" ID="${film.id}" loading="lazy"/>
        <div class="film-card__info">
            <p class="film-card__info--title">
            ${film.title}
            </p>
            <p class="film-card__info--subtitle">
            ${film.genre} | ${film.release_date.split('-')[0]}
            </p>
        </div>
    </a></li>`,
    )
    .join(' ');
  gallery.innerHTML = markupImages;
}
