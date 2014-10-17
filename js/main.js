/* var $overlay = $('<div id="overlay"></div>');
var $form = $("<form>");

//add form to overlay
$overlay.append($form);

//Add overlay
$("body").append($overlay);


//Capture the click event on a link to an image
$("#add-new a").click(function(event){
  event.preventDefault();
  var formLocation = $(this).attr("href");
  //Update overlay with the image linked in the link
  $form.attr("src", formLocation);
  
  //Show the overlay.
  $overlay.show();
  

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
}); 

*/


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
  
  var $movieString = "<tr class='title_movie'>" + "<th colspan='3'>" + $titleMovie  + "</th>" + "</tr>" + "<tr class='movie_info'>" + "<td>" + $genre + "</td>" + "<td>" + "</td>" + "<td>"+ $year + "</td>" + "</tr>" + "<tr>" + "<td class='description' colspan='3'>" + $description + "</td>" + "</tr>" + "<tr id='movieSpoiler'>" + "<td colspan='3'>" + $spoiler + "</td>" + "</tr>";

  $('#movieList').append($movieString);



  event.preventDefault(); // stops the browser from refreshing the page
});

$("#spoilToggle").click(function(){
  var $movieSpoiler = $('#movieSpoiler');
  $(movieSpoiler).toggle();
});



// $("#horrorToggle").click(function(){
//   $("#horror").show(400);
//   $("#romance").hide(400);
//   $("#adventure").hide(400);
//   $("#drama").hide(400);

// });

// $("#romanceToggle").click(function(){
//   $(".romance").toggle();
// });

// $("#adventureToggle").click(function(){
//   $(".adventure").slideToggle(400);
// });

// $("#dramaToggle").click(function(){
//   $(".drama").toggle();
// });




