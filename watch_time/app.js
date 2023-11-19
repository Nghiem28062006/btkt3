class Stopwatch {
    Runtime = 0;

    constructor(Runtime) {
        this.Runtime = Runtime;
        this.timeDisplay = Runtime.querySelector(".time");
        this.startBtn = Runtime.querySelector(".start");
        this.stopBtn = Runtime.querySelector(".stop");
        this.timer = null;
        this.minutes = 0;
        this.seconds = 0;

        this.startBtn.addEventListener("click", () => {
            this.start();
        });
        this.stopBtn.addEventListener("click", () => {
            this.stop();
        });

    }
// start function
    start(){
        if(!this.timer){
            this.timer = setInterval(() =>{
                this.seconds++;
                if(this.seconds === 60){
                    this.minutes++;
                    this.seconds = 0;
                }
                this.updateDisplay();
            }, 1000);
        }
    }
 
// stop function
    stop(){
        clearInterval(this.timer);
        this.timer = null;

    }

// reset function
    reset(){
        this.stop();
        this.minutes = 0;
        this.seconds = 0;
        this.updateDisplay();
    }

// pause function
    pause(){
        clearInterval(this.timer);
        this.timer = null;
    }

// stareAlL function
    startAll(){
        if(!this.timer){
            this.timer = setInterval(() =>{
                this.seconds++;
                if(this.seconds === 60){
                    this.minutes++;
                    this.seconds = 0;
                }
                this.updateDisplay();
            }, 1000);
        }

    }

// stopAll function
    stopAll(){

    }

//updateDisplay function
    updateDisplay(){
        this.timeDisplay.innerHTML = `${this.minutes}:${this.seconds}`;

    }
}


document.addEventListener("DOMContentLoaded", function() {
//tìm tất cả các thẻ có class là stopwatch
    const stopwatchElement = document.querySelectorAll(".stopwatch");
//tìm các btn là start, stop, reset, pause, startAll, stopAll
    const stopAllButton = document.querySelector(".stop-all");

    const startAllButton = document.querySelector(".start-all");

    const pauseButton = document.querySelector(".pause");

    // const stopwatchInstance = new Stopwatch(stopwatchElement);

    // console.log(stopwatchInstance);

    const stopwatcherInstances = Array.from(stopwatchElement).map(Runtime => new Stopwatch(Runtime));

    stopAllButton.addEventListener("click", function(){
        stopwatcherInstances.forEach(stopwatch => stopwatch.reset());
    });

    startAllButton.addEventListener("click", function(){
        stopwatcherInstances.forEach(stopwatch => stopwatch.start());
    });

    pauseButton.addEventListener("click", function(){
        stopwatcherInstances.forEach(stopwatch => stopwatch.pause());
    });


    // const stopwatch1 = new Stopwatch(stopwatchElement);
    // console.log(stopwatch1);




});