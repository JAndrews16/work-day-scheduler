let dateHeader = $("#currentDay").text(moment().format('dddd, MMMM Do YYYY'));
let textAreaId = [0, "task-8am", "task-9am", "task-10am", "task-11am", "task-12pm", "task-1pm", "task-2pm", "task-3pm", "task-4pm", "task-5pm"];
let today = moment().format("MMM Do YY");
let taskList = localStorage.getItem("taskList");
    
if(taskList === null || today !== taskList[0]) {
    taskList = [today, "", "", "", "", "", "", "", "", "", ""];
} 

for(let j = 1; j < taskList.length; j++){
    let textArea = $(`#${textAreaId[j]}`);
    textArea.text(taskList[j]);
    console.log(textArea);
}

function saveTask() {
    let btnName = $(this).attr("name");
    let taskTxt = $(`#${btnName}`).val();
    let dataIndex = $(this).attr("data-index");
    let i = parseInt(dataIndex);
    
    taskList[i] = taskTxt;

    localStorage.setItem("taskList", taskList);
}

$(document).on('click', '.saveBtn', saveTask);