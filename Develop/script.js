//variables declared
var currentDay = $("#currentDay");
var timeBlock = $(".time-block");

//adds the correct classes (just declaring the function here)
function addClasses(){
  //set the currentHour to the current hour from dayjs() in military time
  var currentHour = dayjs().hour();
  console.log(currentHour);
  //for each timeblock element
  $(".time-block").each(function(){
    //make it an integer, get the id attr of the timeblock, 
    //split and get the index 1 value (0 index is the "hour" part), 
    //the number in the id is all that's left
    var blockHour = parseInt($(this).attr("id").split("-")[1])
    console.log(blockHour);

  //if the blockHour is before the currentHour, it is in the past
  //add/remove the proper classes
    if(blockHour < currentHour){
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
  //if the blockHour is equal to the currentHour, it is in the present
  //add/remove the proper classes
  } else if (blockHour === currentHour){
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
  //if the blockHour is after the currentHour, it is in the future
  //add/remove the proper classes
  } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
  }
     })
    }

//adds current time and correct classes to page
function addCurrentTime (){
  currentDay.text(dayjs().format('MMM DD, YYYY [at] hh:mm:ss a'));
  addClasses();
}

//runs on page refresh
function init(){
  //add the current time & correct classes
  addCurrentTime();  
  //increment the current time per second
  setInterval(addCurrentTime,1000);

  $(".time-block").each(function(){
    //this refers to the time-block selected in each "loop"
    //back tick is to "find" or "search" for the id of each time block then make it more refined to the element with the description class
    //set that value to what is in local storage for this element's id (as that was the key used to save in local storage)
    //same as this, but in an each loop so it goes through each .time-block one by one
      // $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    $(`#${$(this).attr("id")} .description`).val(localStorage.getItem($(this).attr("id")))
  })
}
//call init function
init();

  //on click on the save button, execute this function
  $(".saveBtn").on("click", function(){
    //using the time var to be the key name, which is the 
    //save button's parent's id
    //this is the save button, what I clicked on
   var time = $(this).parent().attr("id");
   //using the description var to get the save button's sibiling, the text area, with a class of description
   //the value in that text area(that has the class of description) is stored in the var description 
   var description = $(this).siblings(".description").val();
   //I now set local storage using time as the key and description as the value to save
   localStorage.setItem(time,description)
  });
 
