// script.js

// Function to display current date and time in UTC
function displayCurrentTime() {
    const now = new Date();
    const utcString = now.toISOString().replace('T', ' ').substring(0, 19);
    console.log('Current Date and Time (UTC):', utcString);
}

// Call the function to display the time immediately
displayCurrentTime();