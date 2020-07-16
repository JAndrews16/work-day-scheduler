# Work Day Scheduler

This application allows for users to plan out their day by entering in their various tasks within standard business hours. The application itself is very visual in that any past hours will be highlighted in grey, the current hour highlighted in red, and future hours highlighted in green. Throughout the day users can input, save, and access their tasks without having to worry about losing the list. Note that users are allowed to input and save tasks into past hours. This is for the case that a user prefers to log all tasks in order to review them properly at the end of the day. At the end of the day, the task list is cleared and the user can start fresh with a blank slate.

## Code Description

This code is set up to lean on existing HTML elements in order to color code and input saved tasks using JavaScript. Because the format of this page stays the same throuhout usage, it was decided to create majority of the structure in HTML as opposed to having JavaScript create the elements when needed. The code stores user data by calling the variable "taskHr" with the hour number added to the end of the name. The save occurs when the user clicks the corresponding save button and the saveTask() function is called. This function takes advantage of the "this" keyword to identify which button was clicked. From there, the function places the text from the text area into the proper taskHr variable. The proper variable is found using the name attribute added to each save button, which matches the id attribute on the corresponding textarea.

Upon opening the application, first there is a check to see if it is a new day or not. This is done by referencing a locally stored taskListDate. If the taskListDate does not match the current date then all the locally stored taskHrs are cleared. If it does match, the taskHrs are retrieved from local storage. After that the updateSchedule() function is called. This function handles the color coding and adding of saved tasks to the textareas. It color codes based of a comparison between the current time and the ids for each time block. The code uses the parseInt() function to turn the times into integers as well as convert the current time into military time in the afternoon. Note that the id attributes already reference military time. After the conversion, there is an if statement comparing the two numbers and depending on the hour, the addClass() function adds the appropriate class to the textarea. The classes for past, present, and future hours are prebuilt in the CSS file and will highlight the textareas acordingly. 

## Link to Application & Demo

https://jandrews16.github.io/work-day-scheduler/

The following animation demonstrates the application functionality:

![day planner demo](./Assets/Images/Demo.gif)

## Application Photos

Below is the application when first opened by the user. Note that the color coding will depend on the current time.
![New Day](./Assets/Images/newDay.PNG)

Below shows the page with a few tasks entered:
![Tasks Entered](./Assets/Images/Tasks.PNG)

