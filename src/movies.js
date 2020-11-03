// Iteration 1: All directors? - Get the array of all directors.

function getAllDirectors(arr) {
  return arr.map((eachMovie) => {
    return eachMovie.director;
  });
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(arr) {
  let result = arr.filter((eachMovie) => {
    return (
      eachMovie.director === "Steven Spielberg" &&
      eachMovie.genre.includes("Drama")
    );
  });
  return result.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals

function ratesAverage(arr) {
  let sum = arr.reduce((acc, val) => {
    if (val.rate) {
      return acc + Number(val.rate);
    } else {
      return acc;
    }
  }, 0);
  return Number((sum / arr.length).toFixed(2)) || 0;
}

// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(arr) {
  let copy = [...arr];
  if (a.year > b.year) return 1;
  else if (a.year < b.year) return -1;
  else {
    if (a.title > b.title) {
      return 1;
    } else {
      return -1;
    }
  }
  return ordered;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(arr) {
  let newMovies = [...arr];
  newMovies.sort((movieA, movieB) => {
    if (movieA.title > movieB.title) {
      return 1;
    } else {
      return -1;
    }
  });
  let first20 = [];
  for (let i = 0; i < newMovies.length && i < 20; i++) {
    first20.push(newMovies[i].title);
  }
  return first20;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(arr) {
  let copy = [...arr];
  return copy.map((movie) => {
    return (movie.duration = convertFormatToMinutes(movie.duration));
  });
}

function convertFormatToMinutes(houFormat) {
  let hours = "";
  let minutes = "";
  for (let i = 0; i < hourFormat.length; i++) {
    if (hourFormat[i] === "h") {
      hours = hourFormat.substring(0, i);
    } else if (hourFormat[i] === "m") {
      minutes = hourFormat.substring(i - 2, i);
    }
  }
  return Number(hours) * 60 + Number(minutes);
}

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
