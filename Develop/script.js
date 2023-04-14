// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var currentHour = dayjs().format("HH")
var storedRowMessage = JSON.parse(localStorage.getItem('planner-items')) || [];
var currentMonthDayYearHourMinute = dayjs().format("MMMM D, YYYY ");
var currentHour = dayjs().format("hh");
var currentMinute= dayjs().format("mm");
var currentSecond = dayjs().format("ss");
var morningNight = dayjs().format("A");
var timeBlock = $(".time-block");
console.log(timeBlock);
// console.log(object.rowID);
// console.log("type of >>>", typeof(timeBlock));

var rowOfData = {
  rowID: '',
  description: $(".description").text()
}
//timer - figure out how to get the ss only from the array
function beginTimer(){
    var timeInterval = setInterval(function () {
    currentSecond++;
    currentSecond.textContent = currentSecond;
    if(currentSecond === 0){
      clearInterval(timeInterval);
    }
    }, 1000);
}


function init(){
  currentDay.text(currentMonthDayYearHourMinute + currentHour + ":" + currentMinute +  ":" + currentSecond + " " + morningNight);
  console.log (currentHour);
  $.each (timeBlock, function(){
    rowOfData.rowID = $(this).data("time");
    console.log(rowOfData);
    // if (rowOfData.rowID >= 1 && rowOfData.rowID <=5){
    //   rowOfData = rowOfData += 12;
    //   console.log(rowOfData.rowID);
    // }
   })
  
   
   }

  // $.each(timeBlock, function(){
  //   if (object.rowID <= 5 && object.rowID >=1){
  //     object.rowID = object.rowID += 12
  //     console.log(object.rowID)
  //   }
  // })
  //   if(object.rowID > currentHour){
  //     $(this).addClass("future");
  //     $(this).removeClass("past");
  //     $(this).removeClass("present");
  // } else if (object.rowID < currentHour){
  //     $(this).addClass("past");
  //     $(this).removeClass("future");
  //     $(this).removeClass("present");
  // } else {
  //     $(this).addClass("present");
  //     $(this).removeClass("future");
  //     $(this).removeClass("past");
  // }

// for (var i=0; i<timeBlock.length; i++){
//   findRowID = timeBlock[i].attr("data", "time");
//   console.log(findRowID);
// }
// }




init();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
  $(".saveBtn").on("click", saveLocalStorage());
  //How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  function saveLocalStorage(){
    storedRowMessage.push(rowOfData);
    localStorage.setItem("planner-items", JSON.stringify(storedRowMessage)); 
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? 
  //How can Day.js be used to get the
  // current hour in 24-hour time?
 
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the pa

