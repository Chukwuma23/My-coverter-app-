var containerr = document.getElementById('containerr');

function closeStopwatch() {
console.log('close stop watch');
  containerr.style.right = '-360px';
if (screenWidth > 768) {
   containerr.classList.add('slide');
containerr.style.transition = 'transform 0.19s ease-in-out;'
containerr.style.display = 'none';
containerr.style.transform = 'scale(1)';
}
}

function openStopwatch() {
    
 
    containerr.style.right = '0';

  
   if (screenWidth > 768) {
    containerr.style.display = 'block';
 containerr.style.transform = 'scale(1)';
 
    // Apply block display and other styles for larger screens
  /*  todoList.style.display = 'block';
    todoList.style.position = 'relative';
    todoList.style.left = 'auto';*/
    // Add other styles as needed
    //calculator.style.transform = 'scale(0)';
  }
}






/*function openStopwatch() {
    containerr.style.right = '0';
}
function closeStopwatch() {
    containerr.style.right = '-360px';
}*/
    let startBtn = document.getElementById('start');
    let stopBtn = document.getElementById('stop');
    let resetBtn = document.getElementById('resett');
    let lapBtn = document.getElementById('lap-btn');
    let hour = 00;
    let minute = 00;
    let second = 00;
    let count = 00;
    let lap = [];
    let timer = false;


    startBtn.addEventListener('click', function () {
      timer = true;
      stopWatch();
      document.getElementById('start').style.display = 'none' ;
      document.getElementById('stop').style.display = 'block' ;
     document.getElementById('lap-btn').style.display = 'block' ;
     document.getElementById('resett').style.display = 'none' ;
     console.log(startBtn);
    });

    stopBtn.addEventListener('click', function () {
      timer = false;
      
      document.getElementById('start'
      ).style.display = 'block' ;
      
      document.getElementById('stop').style.display = 'none' ;
      
document.getElementById('lap-btn').style.display = 'none' ;

document.getElementById('resett').style.display = 'block' ;

    });

    resetBtn.addEventListener('click', function () {
        console.log(resetBtn);
      timer = false;
      hour = 0;
      minute = 0;
      second = 0;
      count = 0;
      document.getElementById('hr').innerHTML = "00";
      document.getElementById('min').innerHTML = "00";
      document.getElementById('sec').innerHTML = "00";
      document.getElementById('count').innerHTML = "00";
      document.getElementById('lap-list').innerHTML ='';
      document.getElementById('start').style.display = 'block' ;
      document.getElementById('stop').style.display = 'none' ;
      document.getElementById('lap-btn').style.display = 'block' ;
      document.getElementById('resett').style.display = '' ;
      
    });
    

    lapBtn.addEventListener('click', function () {
      lap.push(`${hour}:${minute}:${second}:${count}`);
      updateLapList();
    });

    function stopWatch() {
      if (timer) {
        count++;
        if (count == 100) {
          second++;
          count = 0;
        }
        if (second == 60) {
          minute++;
          second = 0;
        }
        if (minute == 60) {
          hour++;
          minute = 0;
          second = 0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
        if (hour < 10) {
          hrString = "0" + hrString;
        }
        if (minute < 10) {
          minString = "0" + minString;
        }
        if (second < 10) {
          secString = "0" + secString;
        }
        if (count < 10) {
          countString = "0" + countString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sek').innerHTML = secString;
        document.getElementById('countt').innerHTML = countString;
        setTimeout(stopWatch, 10);
      }
    }

    function updateLapList() {
        if(timer){
      const lapList = document.getElementById('lap-list');
      lapList.innerHTML = '';
      lap.forEach((lapTime, index) => {
        const lapElement = document.createElement('li');
        
        lapElement.textContent = `Lap ${index + 1}: ${lapTime}ms`;
        lapList.appendChild(lapElement);
        lapList.appendChild(document.createElement('hr')); // add horizontal rule
       if (screenWidth > 768){
           lapElement.style.fontSize = '50px';
           }
      });
    }
    }
     
     
     
     
     
     
     /*document.addEventListener('DOMContentLoaded', function(){
  const startButton = document.getElementById('start');
  const stopButton = document.getElementById('stop');
  const resetButton = document.getElementById('reset');
  const lapButton = document.getElementById('lap-btn');
  const timeDisplay = document.getElementById('time-display');

  startButton.addEventListener('click', startTimer);
  stopButton.addEventListener('click', stopTimer);
  resetButton.addEventListener('click', resetStopwatch);
  lapButton.addEventListener('click', addLap);

  let hour = 00;
    let minute = 00;
    let second = 00;
    let count = 00;
    let lap = [];
    let timer = false;


  function startTimer(){
    // Start the timer logic here
    timer = true;
      stopWatch();
      document.getElementById('start').style.display = 'none' ;
      document.getElementById('stop').style.display = 'block' ;
     document.getElementById('lap-btn').style.display = 'block' ;
     document.getElementById('reset').style.display = 'none' ;
    
  }

  function stopTimer(){
    // Stop the timer logic here
    timer = false;
      document.getElementById('start').style.display = 'block' ;
      document.getElementById('stop').style.display = 'none' ;
document.getElementById('lap-btn').style.display = 'none' ;
document.getElementById('reset').style.display = 'block' ;

  }

  function resetStopwatch(){
    // Reset the stopwatch logic here
    timer = false;
      hour = 0;
      minute = 0;
      second = 0;
      count = 0;
      document.getElementById('hr').innerHTML = "00";
      document.getElementById('min').innerHTML = "00";
      document.getElementById('sec').innerHTML = "00";
      document.getElementById('count').innerHTML = "00";
      document.getElementById('lap-list').innerHTML ='';
      document.getElementById('start').style.display = 'block' ;
      document.getElementById('stop').style.display = 'none' ;
      document.getElementById('lap-btn').style.display = 'block' ;
      document.getElementById('reset').style.display = 'none' ;
  }

  function addLap(){
    // Add a new lap logic here
    lap.push(`${hour}:${minute}:${second}:${count}`);
      updateLapList();
    
}
    function stopWatch() {
      if (timer) {
        count++;
        if (count == 100) {
          second++;
          count = 0;
        }
        if (second == 60) {
          minute++;
          second = 0;
        }
        if (minute == 60) {
          hour++;
          minute = 0;
          second = 0;
        }
        let hrString = hour;
        let minString = minute;
        let secString = second;
        let countString = count;
        if (hour < 10) {
          hrString = "0" + hrString;
        }
        if (minute < 10) {
          minString = "0" + minString;
        }
        if (second < 10) {
          secString = "0" + secString;
        }
        if (count < 10) {
          countString = "0" + countString;
        }
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
        setTimeout(stopWatch, 10);
        }
  }

  // Update the time display
  timeDisplay.innerHTML = formatTime(currentTime);
  function updateLapList() {
        if(timer){
      const lapList = document.getElementById('lap-list');
      lapList.innerHTML = '';
      lap.forEach((lapTime, index) => {
        const lapElement = document.createElement('li');
        lapElement.textContent = `Lap ${index + 1}: ${lapTime}ms`;
        lapList.appendChild(lapElement);
        lapList.appendChild(document.createElement('hr')); // add horizontal rule
      });
    }
    }
});*/
 