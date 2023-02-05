'use strict';

const movieList = document.querySelector('#movies')

const showMovies = (data) => {

   movieList.innerHTML +=  `
   <div class="movie">
   <img class="movie__img" src=${data.posterUrl} alt=${data.title}>
   <h2 class="movie__title">${data.title}</h2>
   <p class="movie__year">${data.year}</p>
   <p class="movie__genre">${data.genres.join(", ")}</p>
 </div>   

 `
}

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data => data.forEach(showMovies)))







