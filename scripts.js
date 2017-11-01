$(document).ready(function(){
// Whent the user clicks a table, open the newRez form
var lastTableClicked;
$(".table").on("click", function(){
  $("#newRez").css("display", "block");
  var tableNum = $(this).text();
  $("#tableNumber").text("Table Number: " + tableNum);
  lastTableClicked = tableNum;
});

// getting the close funciton to work.
$("i").on("click", function(){
  $("#newRez").css("display", "none");
});

var info = [
  { table: " ",
    name: " ",
    size: " "
  }];

$("submit").on("click", function() {
  $(this).preventDefault();
  // set the value attribute with the user info in the input
  // What's missing: the information is not linked to the table, therefore the name and party size can't be stored nor pulled for later usage.
  info[lastTableClicked].size = $(".size").val();
  info[lastTableClicked].name = $(".name").val();
  info[lastTableClicked].table = lastTableClicked;
  $(".name").val(" ");
  $(".size").val(" ");
  $(this).toggleClass("reserved");
});

$("button").on("hover", function(){
  $(".reserved").text("Name: " + info[].name);
  $(".reserved").text("Size of party: " + info[].size);
});

});
