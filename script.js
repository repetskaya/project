// const numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?", "8");

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors:{},
//   genres:[],
//   privat:false
// };

// const lastSeenFilm = prompt("Один из последних просмотренных фильмов?", ""); // hello
// const rateIt = prompt("На сколько оцените его?", ""); // 8

// const lastFilm = prompt("Один из последних просмотренных фильмов?", "");
// const rateFilm = prompt("На сколько оцените его?", "");


// // const movies = {
// //   lastSeenFilm: rateIt,
// //   [lastFilm]: rateFilm,
// // };

// personalMovieDB.movies[lastSeenFilm] = rateIt;

// console.log(personalMovieDB);

let isLoop = true;

while (isLoop) {
  const lastSeenFilm = prompt("Один из последних просмотренных фильмов?", "");

  if(lastSeenFilm.length !== 0 && lastSeenFilm.length < 50) {
    isLoop = false;
  }

}
