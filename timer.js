// TIMER
var tiimer = document.getElementById('tiimer');

function openTimer() {
  tiimer.style.right = '0';
  if (screenWidth > 768) {
    tiimer.style.display = 'block';
    }
}

function closeTimer() {
  tiimer.style.right = '-380px';
  if (screenWidth > 768) {
    tiimer.style.display = 'none';
    }
}

let interval;
let time = 0;

function startTimer() {
  
  const hoursInput = document.getElementById('hours').value;
  const minutesInput = document.getElementById('minutes').value;
  const secondsInput = document.getElementById('seconds').value;
 
  
document.getElementById('timer-sound').pause();

  if (hoursInput === '' || minutesInput === '' || secondsInput === '') {
    alert('Please enter values for hours, minutes, and seconds.');
    return;
  }

  time = parseInt(hoursInput) * 3600 + parseInt(minutesInput) * 60 + parseInt(secondsInput);

  document.getElementById('start-button').style.display = 'none';
  document.getElementById('stop-button').style.display = 'block';
  document.getElementById('timer-input').style.display = 'none';
  document.getElementById('reset').style.display = 'none';
  document.getElementById('reset').style.display = 'none';
  //document.getElementById('containers').style.display.right ='0px';

  interval = setInterval(function() {
    time--;
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    document.getElementById('timer').innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    if (time === 0) {
      clearInterval(interval);
      document.getElementById('timer-sound').play();
      document.getElementById('timer-input').style.display = 'block';
      document.getElementById('reset').style.display = 'block';
      document.getElementById('start-button').style.display = 'block';
      document.getElementById('stop-button').style.display = 'none';
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  document.getElementById('start-button').style.display = 'block';
  document.getElementById('stop-button').style.display = 'none';
  document.getElementById('timer-input').style.display = 'block';
  document.getElementById('reset').style.display = 'block';
  document.getElementById('timer-sound').pause();
}

function resetTimer() {
  time = 0;
  document.getElementById('timer').innerHTML = '00:00:00';
  stopTimer();
  document.getElementById('hours').value = '';
  document.getElementById('minutes').value = '';
  document.getElementById('seconds').value = '';
  document.getElementById('timer-sound').pause();
}
