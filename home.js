var currentTime = new Date();

var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var seconds = currentTime.getSeconds();

// var meridiem = hours >= 12 ? "PM" : "AM";

// hours = hours % 12;
// hours = hours ? hours : 12; 

var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);

document.getElementById("currentTime").innerHTML = formattedTime;

function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = (hours < 10 ? "0" : "") + hours;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;

    var timeString = hours + ":" + minutes + ":" + seconds;
    
    document.getElementById("clock").innerHTML = timeString;
}

setInterval(updateClock, 1000);

updateClock();