$( document ).ready(function() {
  $("form").hide();
});


$("#add-new").click(function(){
  $("form").slideToggle(400);
});


var $button = $("#submitButton"); 


$button.click(function(){

  var $titleMovie = $('#title_movie').val();
  var $genre = $('#genre').val();
  var $year = $('#year').val();
  var $description = $('#description').val();
  var $spoiler = $('#spoiler').val();

  // var $genreVal = $("'.' + $genre");
  
  var $movieString = "<table class=" + $genre +">" + "<tr class='title_movie'>" + "<th colspan='3'>" + $titleMovie  + "</th>" + "</tr>" + "<tr class='movie_info'>" + "<td>" + $genre + "</td>" + "<td>" + "</td>" + "<td>"+ $year + "</td>" + "</tr>" + "<tr>" + "<td class='description' colspan='3'>" + $description + "</td>" + "</tr>" + "<tr class='spoiler'>" + "<td colspan='3'>" + $spoiler + "</td>" + "</tr>" + "</table>" ;

  $('#movieList').append($movieString);

  event.preventDefault(); // stops the browser from refreshing the page
});



$('#spoilToggle').click(function(){
  
  $('.spoiler').toggle();
   event.preventDefault(); 
});



$("button").click(function (){
var $class = $(this).val();
  $('.' + $class).toggle();
  $(this).toggleClass("disabled");
});







