'use strict';

const movieList = document.querySelector('#movies')

fetch('https://apps.kodim.cz/daweb/trening-api/apis/movie-api/movies')
    .then((resp) => resp.json())
    .then((data) => (showMovies(data)))

    const showMovies = (movieData) => {
      
      movieList.innerHTML =  `
       <div class="movie">
       <img class="movie__img" src=${movieData[0].posterUrl} alt=${movieData[0].title}>
       <h2 class="movie__title">${movieData[0].title}</h2>
       <p class="movie__year">${movieData[0].year}</p>
       <p class="movie__genre">${movieData[0].genres.join(", ")}</p>
     </div>   
    
     `
     }
