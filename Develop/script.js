// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var currentHour = dayjs().format("HH")
var storedRowMessage = JSON.parse(localStorage.getItem('planner-items')) || [];
var currentHour = dayjs().format("hh");
var timeBlock = $(".time-block");
console.log(timeBlock);
// console.log(object.rowID);
// console.log("type of >>>", typeof(timeBlock));
var timeBlockArray = [''];
//timer - figure out how to get the ss only from the array
// function beginTimer(){
//   var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
//   timeDisplayEl.text(rightNow);
// }
function addCurrentTime (){
  currentDay.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
  console.log (currentHour);
}

function init(){
  addCurrentTime();  
  setInterval(addCurrentTime,1000);
  $.each (timeBlock, function(){
    rowID = $(this).data("time");
    var rowOfData = {
      rowID: rowID,
      description: $(".description").text()
    }
    timeBlockArray.push(rowOfData);
    console.log(timeBlockArray)
   })
   timeBlockArray.shift();
   console.log("only 9 now", timeBlockArray)
   for (var i=0; i<timeBlockArray.length; i++){
    if(currentHour <= 5 && currentHour >=1){
      currentHour += 12
      console.log(currentHour);
    } else {
      console.log(timeBlockArray[i].rowID, i);
      if(timeBlockArray[i].rowID > currentHour){
            $(this).addClass("future");
            $(this).removeClass("past");
            $(this).removeClass("present");
        } else if (timeBlockArray[i].rowID < currentHour){
            $(this).addClass("past");
            $(this).removeClass("future");
            $(this).removeClass("present");
        } else {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        }
    }
   }
   //use this send timeBlockArray to the saveLocalStorage function as a parameter
   saveLocalStorage(timeBlockArray);
}
  


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


  // init() {
  //   //your code here
  //   localstoragefunction(rowOfData)
  //   };
  //   localstoragefunction(parameter){
  //   // your other code that handles localstorage stuff
  //   //here you passed rowOfData, so you would have access to it, but as parameter }
  //   }