//Defined Variables
let dateHeader = $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
let textAreaId = [0, "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
let today = moment().format("MMM Do YY");
let taskList = localStorage.getItem("taskList");
  
//Check if a taskList already exists locally or if it is a new day. If so, create an empty taskList.
if(taskList === null || today !== taskList[0]) {
    taskList = [today, "", "", "", "", "", "", "", "", "", ""];
} 

//Function for color coding and adding locally saved tasks into their proper areas
function updateSchedule() {
    let time = moment().format('h:mm a');
    let currentHour = parseInt(time.split(':', 1));

    //If "PM" then convert to military time
    if(time.includes("p")){
        currentHour += 12;
    }

    for(let j = 1; j < taskList.length; j++){
        let hour = parseInt(textAreaId[j].split(':', 1));
        
        //For time blocks after noon, convert to military time
        if(j > 5) {
            hour += 12;
        }
        
        //Input locally saved (or empty) task list into text area
        let textArea = $(`#${textAreaId[j]}`);
        textArea.text(taskList[j]);

        //Compare the hour in the time block to the current hour and highlight appropriately
        if (hour < currentHour) {
            textArea.addClass("past");

        } else if(hour === currentHour) {
            textArea.addClass("present");

        } else {
            textArea.addClass("future");
        }   
    }  
}

updateSchedule();

//Function to save the text input locally using an array
function saveTask() {
    let btnName = $(this).attr("name");
    let taskTxt = $(`#${btnName}`).val();
    let dataIndex = $(this).attr("data-index");
    let i = parseInt(dataIndex);
    
    taskList[i] = taskTxt;

    localStorage.setItem("taskList", taskList);
}

//When a save button is clicked, run the saveTask() function
$(document).on('click', '.saveBtn', saveTask);