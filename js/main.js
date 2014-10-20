$( document ).ready(function() {
  $("form").hide();
    $(".spoiler").hide();
});


$("#add-new").click(function(){
  $("form").slideToggle(400);
});


var $button = $("#submitButton"); 


$button.click(function(){

  var $titleMovie = $('#title_movie').val();
  var $genre = $('#genre').val();
  var $rating = $('#rating').val();
  var $year = $('#year').val();
  var $description = $('#description').val();
  var $spoiler = $('#spoiler').val();

  // var $genreVal = $("'.' + $genre");
  
  var $movieString = "<table class='" + $genre + "'>" + "<thead>" + "<tr class='title_movie'>" + "<th colspan='3'>" + $titleMovie  + "</th>" + "</tr>" + "</thead>" + "<tr class='movie_info'>" + "<td class='year'>" + $year + "</td>" + "<td>" + $rating + " star" + "</td>" +  "<td class='genre'>" + $genre + "</td>" + "</tr>" + "<tr>" + "<td class='description' colspan='3'>" + $description + "</td>" + "</tr>" + "<tr>" + "<td class='spoiler' colspan='3'>" + $spoiler + "</td>" + "</tr>" + "</table>" ;

  $('#movieList').prepend($movieString);

  event.preventDefault(); // stops the browser from refreshing the page
});



$('#spoilToggle').click(function(){
  $('.spoiler').toggle();
   event.preventDefault(); 
});



$("button").click(function (){
  var $this = $(this);
  var $class = $(this).val();
  $("." + $class).toggle();
  $(this).toggleClass("disabled");
});