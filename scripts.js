// This program is an event based program. Which means that the code only runs when an event takes place. In this code that is when a button is clicked.
// The only way for this to work is to have a golabal var to hold the info until it needs to ve used.
// There are three events that happen: click, submit, hover.
// We also crated one structure to store all of our reservations that we've used thus far. We used an array. Any structure that could hold multiple things would be fine.


// doc.ready = your code won't run until after the HTML and CSS run.
$(document).ready(function(){
// Whent the user clicks a table, open the newRez form
var lastTableClicked;
var tableReservations = [];

// this function takes the number[.text()] from the table then erases any spaces[.trim()].
// it also allows us to get the num from the table to use it later.
function getNumberFromTable(table) {
  return parsInt ( $(table).text().trim() );
}

// This f(x) opens the form as well as get the table numbe ans sets the global variable with that number.
$(".table").on("click", function() {
  $("#newRez").css("display", "block");
  var tableNum = getNumberFromTable(this);
  $("#tableNumber").text("Table Number: " + tableNum);
  lastTableClicked = this;
});

// This f(x) allows the close to work.
$("i").on("click", function(){
  $("#newRez").css("display", "none");
});

// The save button below allows us to
$("#save").on("click", function() {
  // $(this).preventDefault();
// Step 1: Change the class of the button.
  // $(lastTableClicked).toggleClass("reserved");
  $(lastTableClicked).addClass("available").removeClass("reserved");
// Step 2: Get the information from the form.
  var name = $(".name").val();
  var size = $(".size").val();
  var reservation = {
    name: name,
    size: size
  };
  var tableNum = getNumberFromTable(lastTableClicked);
  tableReservations[table] = reservation;
  console.log(tableReservations);

// Hide form.
  $("#newRez").css("display", "none");
});

// Step 3: Create the hover.
$(".table").on("mouseenter", function(){
  var tableNum = getNumberFromTable(this);
  if ($(this).hasClass("reserved")){
    console.log(tableNum);
    var reservationInfo = tableReservations [tableNum];
  }
});


});
