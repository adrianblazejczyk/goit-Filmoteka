function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var r=o("7IoHk"),d=o("ezQ3Q"),s=o("5zJd0");o("enZ18");var a=o("hfaIS");o("11hO5");const l=document.querySelector(".loader__div");l.classList.add("hidden");const c=document.querySelector(".section-films"),f=document.querySelector("#watched-btn"),u=document.querySelector("#queue-btn"),h=e=>{const t=`\n  <div class="film-card">\n    <img class="film-card__img" src="https://image.tmdb.org/t/p/w500/${e.poster_path}" alt="${e.overview}" title="${e.title}" ID="${e.id}" loading="lazy"/>\n\n    <div class="film-card__info">\n        <p class="film-card__info--title">\n        ${e.title}\n        </p>\n        <p class="film-card__info--subtitle">\n        ${(e=>{const t=[];for(const n of e.genres)t.push(n.name);return t.join(", ")})(e)} | ${e.release_date.split("-")[0]}\n        </p>\n    </div>\n</div>\n</a>`;c.insertAdjacentHTML("beforeend",t)};d.checkLocalStorage(),c.addEventListener("click",(async function(e){e.preventDefault();try{const t=await s.fetchMoviesByID(e.target.id);a.createModalContent(t)}catch(e){console.log(e)}})),f.addEventListener("click",(()=>{if(l.classList.remove("hidden"),c.innerHTML="",null==localStorage.getItem("watchedMovies"))return l.classList.add("hidden"),e(r).Notify.info("Sorry! Your list is empty!");d.getWatchedMovies().map((e=>{s.fetchMoviesByID(e).then((e=>{l.classList.add("hidden"),h(e)})).catch((e=>console.error(e)))}))})),u.addEventListener("click",(()=>{if(l.classList.remove("hidden"),c.innerHTML="",null==localStorage.getItem("queuedMovies"))return l.classList.add("hidden"),e(r).Notify.info("Sorry! Your list is empty!");d.getQueuedMovies().map((e=>{s.fetchMoviesByID(e).then((e=>{l.classList.add("hidden"),h(e)})).catch((e=>console.error(e)))}))}));
//# sourceMappingURL=library.c992526b.js.map
