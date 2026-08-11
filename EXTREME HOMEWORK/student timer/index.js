let timerElement=document.getElementById('timer');

let seconds=0;
let minutes=0;
let hours=0;
let timer;
let isRunning=false;

function startTimer() {
    timer=setInterval(updateTimer,1000);
    isRunning =true;
}

function stopTimer() {
    clearInterval(timer);
    isRunning=false;
    seconds=0;
    minutes=0;
    hours=0;
    timerElement.textContent=`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pauseTimer() {
    clearInterval(timer);
    isRunning=false;
}

function updateTimer() {
    seconds ++;

    if(seconds >=60){
        seconds=0;
        minutes++;
    
     if(minutes >=60){
        minutes=0;
        hours++;
    }
}
timerElement.textContent=`${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}


function pad(value) {
    return value < 10 ? '0' + value : value;
}