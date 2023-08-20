$(function () {
var today = dayjs().format("dddd, MMMM DD, YYYY");
var currentHour = dayjs().hour();
$("#currentDay").text(today)
console.log(today, currentHour);
for (let i = 9; i <= 17; i++) {
  var timeblock = $("<div>");
  timeblock.addClass("row time-block")
  timeblock.attr("id", "hour-" + i)
  var hourColumn = $("<div>")
  hourColumn.addClass("col-2 col-md-1 hour text-center py-3")
  hourColumn.html(dayjs().hour(i).format("h A"))
  var textArea = $("<textarea>")
  textArea.addClass("col-8 col-md-10 description")
  var saveCalendar = $("<button>")
  saveCalendar.addClass("btn saveBtn col-2 col-md-1")
  saveCalendar.html('<i class="fas fa-save" aria-hidden="true"></i>')
  timeblock.append(hourColumn).append(textArea).append(saveCalendar)
  $(".container-lg").append(timeblock)
}




var saveTask = function saveTask() {
  document.getElementsByClassName("description");
  document.getElementsByClassName("btn");
}

saveTask.addEventListener("click", function () {
  var dailyTask = userTask.value;
  localStorage.setItem("User-Daily-Task", dailyTask);
  var displayDailyTask = localStorage.getItem("User-Daily-Task")
})

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 

    
    //HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    
    //HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //$( "li" ).each(function( index ) {
// console.log( index + ": " + $( this ).text() );
// });


    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });