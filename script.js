const startbtn = document.getElementById('start');
const stopbtn = document.getElementById('stop');
const resetbtn = document.getElementById('reset');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
var isStart = false;
var isStop = false;
var timer = null;

function stopTimer() {
    if (!isStop) {
        clearInterval(timer)
        isStop = true;
        isStart = false;
    }
}

function resetTimer() {

    if (isStart) {
        // console.log('inside resetTimer')
        clearInterval(timer);
        min.innerText = '00';
        sec.innerText = '00';
        isStart = false;


    } else if (isStop) {
        min.innerText = '00';
        sec.innerText = '00';
        isStop = false;
    }
}
function startTimerInterval() {



    let a = parseInt(sec.innerText);
    if (a + 1 === 60) {
        sec.innerText = '00';
        let b = parseInt(min.innerText);

        if (b <= 8)
            min.innerText = '0' + (b + 1);
        else {
            min.innerText = b + 1;
        }


    }
    else if (a <= 8)
        sec.innerText = '0' + (a + 1);
    else {
        sec.innerText = a + 1;
    }



}

function startTimer() {
    // console.log(min.innerText)
    // console.log(min.innertext)
    if (isStart) {
        return;
    }

    console.log(isStart)

    isStart = true;
    isStop = false;
    timer = setInterval(startTimerInterval, 1000)



}
startbtn.addEventListener('click', startTimer);
stopbtn.addEventListener('click', stopTimer);
resetbtn.addEventListener('click', resetTimer)
