// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay");
var currentHour = dayjs().format("HH")
var storedRowMessage = JSON.parse(localStorage.getItem('planner-items')) || [];
var currentHour = dayjs().format("hh");
var timeBlock = $(".time-block");
console.log(timeBlock);
var timeBlockArray = [''];

//adds current time to page
function addCurrentTime (){
  currentDay.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
}
//runs on page refresh
function init(){
  //add the current time
  addCurrentTime();  
  //increment the current time in seconds
  setInterval(addCurrentTime,1000);
  //for each timeBlock element, set the rowID property to the data-time attribute
  $.each (timeBlock, function(){
    rowID = $(this).data("time");
    var rowOfData = {
      rowID: rowID,
      description: $(".description").text()
    }
    //push this row of data into the timeBlock array
    timeBlockArray.push(rowOfData);
    console.log(timeBlockArray)
   })
   //remove the first one as it had an extra empty one at the beginning
   timeBlockArray.shift();
   console.log("only 9 now", timeBlockArray)
   //this will set the classes
   //for each index of the timeBlockArray
   for (var i=0; i<timeBlockArray.length; i++){
    //if the current hour is between 1-5 add 12 to make it 24 hours
    if(currentHour <= 5 && currentHour >=1){
      currentHour += 12;
      //if the rowID (which is the data-attribute of time) is greater than the current hour
      //for each timeBlock element add future class and remove past/present classes
      if(timeBlockArray[i].rowID > currentHour){
        $(timeBlock[i]).addClass("future");
        $(timeBlock[i]).removeClass("past");
        $(timeBlock[i]).removeClass("present");
      //if the rowID (which is the data-attribute of time) is less than the current hour
      //for each timeBlock element add past class and remove future/present classes
    } else if (timeBlockArray[i].rowID < currentHour){
        $(timeBlock[i]).addClass("past");
        $(timeBlock[i]).removeClass("future");
        $(timeBlock[i]).removeClass("present");
      //if the rowID (which is the data-attribute of time) equals the current hour
      //for each timeBlock element add present class and remove past/future classes
    } else {
        $(timeBlock[i]).addClass("present");
        $(timeBlock[i]).removeClass("future");
        $(timeBlock[i]).removeClass("past");
    }
    //else 
    } else {
      console.log(timeBlockArray[i].rowID, i);
      //if the rowID (which is the data-attribute of time) is greater than the current hour
      //for each timeBlock element add future class and remove past/present classes
      if(timeBlockArray[i].rowID > currentHour){
            $(timeBlock[i]).addClass("future");
            $(timeBlock[i]).removeClass("past");
            $(timeBlock[i]).removeClass("present");
      //if the rowID (which is the data-attribute of time) is less than the current hour
      //for each timeBlock element add past class and remove future/present classes
        } else if (timeBlockArray[i].rowID < currentHour){
            $(timeBlock[i]).addClass("past");
            $(timeBlock[i]).removeClass("future");
            $(timeBlock[i]).removeClass("present");
      //if the rowID (which is the data-attribute of time) equals the current hour
      //for each timeBlock element add present class and remove past/future classes
        } else {
            $(timeBlock[i]).addClass("present");
            $(timeBlock[i]).removeClass("future");
            $(timeBlock[i]).removeClass("past");
        }
    }
   }
   //use this send timeBlockArray to the saveLocalStorage function as a parameter
   saveLocalStorage(timeBlockArray);
}

init();


  $(".saveBtn").on("click", saveLocalStorage());
 
  function saveLocalStorage(timeBlockArray){
    storedRowMessage.push(timeBlockArray);
    localStorage.setItem("planner-items", JSON.stringify(storedRowMessage)); 
  }


    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? 
   //How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
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