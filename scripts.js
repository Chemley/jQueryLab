$(document).ready(function(){
// Whent the user clicks a table, open the newRez form

// When the user clicks save, change the button from avail to reserved
$("button").on("click", function(){
  $("#newRez").css("display", "block");
  $(this).toggleClass("reserved");
});
// When the user clicks the "X", close the form. No further action taken.






});
