//Get all req. elements using DOM
const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');
const outputSec = document.getElementById('sec');
const outputTens = document.getElementById('msec');

 //to store time interval
 var timer = null;



var tens = 0;
var seconds = 0;

//Understanding purpose I have taken below var. but without which we can also code
var isStart = false; //check weather timer is running
var isStop = false; //check weather timer is stopped


//Event Listener to Start Time
function startTime() {
    //if Time is already running then dont do anything just return 
    if (isStart) {
        return;
    }

    //if Time is not running then set the time interval to start the time
    isStart=true;
    isStop=false;
    timer = setInterval(startTimer, 10);//calls startTimer every 10 milliseconds
}

//Even listener to Stop Time
function stopTime() {

    //if timer is running and Stop button is not pressed then only we can stop the time
    if (isStart && !isStop) {
        isStart = false;
        isStop = true;
        clearInterval(timer);
    }

}

//Event Listener to reset Time
function resetTime() {
    //if timer is running or Stop button is pressed then we can reset the timer
    if(isStart || isStop){

        //stop the setInterval fun calling
        clearInterval(timer);


        //reset the values
        tens = "00";
        seconds = "00";
        outputTens.innerText = tens;
        outputSec.innerText = seconds;

        isStart=false;
        isStop=false;
    }
}


//SetInterval Callback Function
function startTimer() {
    tens++;

    //if tens is between 1 to 9 (inclusive)
    if (tens <= 9) {
        outputTens.innerHTML = "0" + tens;
    }
    //if tens is between 10 to 99 (inclusive)
    else if (tens <= 99) {
        outputTens.innerHTML = tens;
    }
    else { //if tens is 100 then change seconds accordingly
        seconds++;

        //same above logic
        if (seconds <= 9) {

            outputSec.innerHTML = "0" + seconds;
        } else {
            outputSec.innerHTML = seconds;
        }

        //reset tens value
        tens = 0;
        outputTens.innerHTML = "0" + tens;
    }



}




//Add Event Listeners to Start Button, Stop Button, Reset Button
startbtn.addEventListener('click', startTime);
stopbtn.addEventListener('click', stopTime);
resetbtn.addEventListener('click', resetTime)
