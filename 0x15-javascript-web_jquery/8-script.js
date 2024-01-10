$(function () {
  $.get('https://swapi.co/api/films/?format=json', function (data, status) {
    for (let m of data.results) {
      $('ul#list_movies').append($('<li></li>').text(m.title));
    }
  });
});
