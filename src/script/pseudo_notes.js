// 12 - 20 - 22

// Just finished fixing save functionality

// Edit project ability
// Deleting Projects

// Nav bar should be Home and All Projects
// On Home if user presses Create Project it will just take them to All Projects and following that bring up the Create Project modal

// Restyle ' Home ' page to have " Other projects " hanging to the right half of main
// and the ' Main ' project hanging on the left half of main

// ------------- 12 / 27 / 2022 -------------

// Added DOM for next and previous page buttons
// Added functionality to display the next page of contents correctly

// Need to add functionality for ' Previous ' page button
// Need to add method for tracking which page we are on

// Pseudo code 
// for Next / Previous page buttons if the user is scrolling finished pages
// When a NEW page is created our current code will disable the ' Next ' button because there is no existing next page.
// HOWEVER if a user were to press the ' Previous ' button
// We have the ability to track page number in our parameters whenever we hookup listeners to the buttons
// So I can add a hook to ' Previous ' button every time we click to the next new page
// and basically call the populateMain() function again but with page - 1

// Maybe we need to rework the populateMain() function to work with previous page scrolling


// DONT FORGET WE STILL NEED TO TRACK TASKS WITH EACH INDIVIDUAL PROJECT
// ALSO FIGURE OUT HOW WE CAN GET THAT TO WORK WITH PAGE SCROLLING
// THEN THE FINAL TASK IS REALLY JUST Edit / Delete projects
// AND restyling main and making ' All Projects ' in nav functional
// ' All Projects ' will probably just be reworking the grid properties to display everything evenly
