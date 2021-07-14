//The Current button doesn't progresss the clock if another button is clicked before


var noon = 12;

//******************Shows the current time****************
function showCurrentTime() {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var amPm = "AM";

    //Creates a static hour variable that will affect the picture shown in background
    var hoursStatic = currentTime.getHours();

    //Adds 0 in front of numbers less than 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    //Changes amPm variable to pm if past 12pm
    if (hours > noon) {
        amPm = "PM";
    }

    //Changes format from 24-hours to 12-hours
    if (hours > noon) {
        hours = hours - 12;
    }

    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + amPm;

    if (hoursStatic < 6) {
        document.getElementById("page").style.backgroundImage = "url('images/night.jpg')";
    } else if (hoursStatic < 12) {
        document.getElementById("page").style.backgroundImage = "url('images/morning.jpg')";
    } else if (hoursStatic < 18) {
        document.getElementById("page").style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hoursStatic < 24) {
        document.getElementById("page").style.backgroundImage = "url('images/sunset.jpg')";
    }
}

//******************Shows the time in the morning****************
function showMorningTime() {
    var morningTime = new Date(2020, 1, 1, 6, 0, 0);

    var hours = morningTime.getHours();
    var minutes = morningTime.getMinutes();
    var seconds = morningTime.getSeconds();
    var amPm = "AM";

    var hoursStatic = morningTime.getHours();

    //Adds 0 in front of numbers less than 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    //Changes amPm variable to pm if past 12pm
    if (hours > noon) {
        amPm = "PM";
    }

    //Changes format from 24-hours to 12-hours
    if (hours > noon) {
        hours = hours - 12;
    }
    
    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + amPm;

    if (hoursStatic < 6) {
        document.getElementById("page").style.backgroundImage = "url('images/night.jpg')";
    } else if (hoursStatic < 12) {
        document.getElementById("page").style.backgroundImage = "url('images/morning.jpg')";
    } else if (hoursStatic < 18) {
        document.getElementById("page").style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hoursStatic < 24) {
        document.getElementById("page").style.backgroundImage = "url('images/sunset.jpg')";
    }

    clearInterval(updateClock);
}

//******************Shows the time at noon****************
function showNoonTime() {
    var noonTime = new Date(2020, 1, 1, 12, 0, 0);

    var hours = noonTime.getHours();
    var minutes = noonTime.getMinutes();
    var seconds = noonTime.getSeconds();
    var amPm = "AM";
    
    //Creates a static hour variable that will affect the picture shown in background
    var hoursStatic = noonTime.getHours();

    //Adds 0 in front of numbers less than 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    //Changes amPm variable to pm if past 12pm
    if (hours => noon) {
        amPm = "PM";
    }

    //Changes format from 24-hours to 12-hours
    if (hours > noon) {
        hours = hours - 12;
    }

    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + amPm;

    if (hoursStatic < 6) {
        document.getElementById("page").style.backgroundImage = "url('images/night.jpg')";
    } else if (hoursStatic < 12) {
        document.getElementById("page").style.backgroundImage = "url('images/morning.jpg')";
    } else if (hoursStatic < 18) {
        document.getElementById("page").style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hoursStatic < 24) {
        document.getElementById("page").style.backgroundImage = "url('images/sunset.jpg')";
    }

    clearInterval(updateClock);
}

//******************Shows the time at dusk****************
function showDuskTime() {
    var duskTime = new Date(2020, 1, 1, 18, 0, 0);

    var hours = duskTime.getHours();
    var minutes = duskTime.getMinutes();
    var seconds = duskTime.getSeconds();
    var amPm = "AM";
    
    //Creates a static hour variable that will affect the picture shown in background
    var hoursStatic = duskTime.getHours();

    //Adds 0 in front of numbers less than 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    //Changes amPm variable to pm if past 12pm
    if (hours > noon) {
        amPm = "PM";
    }

    //Changes format from 24-hours to 12-hours
    if (hours > noon) {
        hours = hours - 12;
    }
    
    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + amPm;

    if (hoursStatic < 6) {
        document.getElementById("page").style.backgroundImage = "url('images/night.jpg')";
    } else if (hoursStatic < 12) {
        document.getElementById("page").style.backgroundImage = "url('images/morning.jpg')";
    } else if (hoursStatic < 18) {
        document.getElementById("page").style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hoursStatic < 24) {
        document.getElementById("page").style.backgroundImage = "url('images/sunset.jpg')";
    }

    clearInterval(updateClock);
}

//******************Shows the time at midnight****************
function showMidnightTime() {
    var midnightTime = new Date(2020, 1, 1, 0, 0, 0);

    var hours = midnightTime.getHours();
    var minutes = midnightTime.getMinutes();
    var seconds = midnightTime.getSeconds();
    var amPm = "AM";
    
    //Creates a static hour variable that will affect the picture shown in background
    var hoursStatic = midnightTime.getHours();

    //Adds 0 in front of numbers less than 10
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    
    //Changes amPm variable to pm if past 12pm
    if (hours > noon) {
        amPm = "PM";
    }

    //Changes format from 24-hours to 12-hours
    if (hours > noon) {
        hours = hours - 12;
    }
    
    document.getElementById("clock").innerHTML =
    hours + ":" + minutes + ":" + seconds + " " + amPm;

        if (hoursStatic < 6) {
        document.getElementById("page").style.backgroundImage = "url('images/night.jpg')";
    } else if (hoursStatic < 12) {
        document.getElementById("page").style.backgroundImage = "url('images/morning.jpg')";
    } else if (hoursStatic < 18) {
        document.getElementById("page").style.backgroundImage = "url('images/afternoon.jpg')";
    } else if (hoursStatic < 24) {
        document.getElementById("page").style.backgroundImage = "url('images/sunset.jpg')";
    }

    clearInterval(updateClock);
}

//puts a "0" in front of single digit numbers
function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    };
    return i;
}

//calls function every 1000ms (1 second)
var updateClock = setInterval(showCurrentTime, 1000);