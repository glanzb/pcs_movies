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


$("#add-new").click(function(toggle){
  $("form").slideToggle(400);
  toggle.preventDefault;
});

var $button = $("#submitButton"); 


$button.click(function(){

  var $titleMovie = $('#title_movie').val();
  var $genre = $('#genre').val();
  var $year = $('#year').val();
  var $description = $('#description').val();
  var $spoiler = $('#spoiler').val();

  var $movieString = "<li>" + $titleMovie  + "    " + $genre + "    " + $year + "    " + $description + "    " + $spoiler + "</li>";

  $('#movieList').append($movieString);

  event.preventDefault(); // stops the browser from refreshing the page

});


$("#horrorToggle").click(function(){
  $(".horror").slideToggle(400);
});

$("#romanceToggle").click(function(){
  $(".datenight").slideToggle(400);
});

$("#adventureToggle").click(function(){
  $(".adventure").slideToggle(400);
});

$("#dramaToggle").click(function(){
  $(".drama").slideToggle(400);
});

$("#spoilToggle").click(function(){
  $(".spoiler").slideToggle(400);
});
