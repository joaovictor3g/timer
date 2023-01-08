const INITIAL_TIME = 10; // in seconds, equal to 25 minutes
let clock = INITIAL_TIME;
let interval = null;

let isOn = false;

const [minutesEl, secondsEl] = document.querySelectorAll(".group");
const startButton = document.querySelector(".toggle-cycle");

function start() {
  isOn = true;
  interval = setInterval(() => {
    if (clock > 0) {
      clock--;
      render(clock);
    } else {
      reset();
    }
  }, 1000);
  startButton.innerHTML = "Parar ciclo";
}

function render(timeInSec = INITIAL_TIME) {
  const timeInMinutes = Math.floor(timeInSec / 60);
  const restTimeInSec = timeInSec % 60;

  minutesEl.firstElementChild.innerHTML = Math.floor(timeInMinutes / 10);
  minutesEl.lastElementChild.innerHTML = Math.floor(timeInMinutes % 10);
  secondsEl.firstElementChild.innerHTML = Math.floor(restTimeInSec / 10);
  secondsEl.lastElementChild.innerHTML = Math.floor(restTimeInSec % 10);
}

function reset() {
  isOn = false;
  clock = INITIAL_TIME;
  clearInterval(interval);
  render();
  startButton.innerHTML = "Iniciar ciclo";
}

startButton.addEventListener("click", () => {
  if (isOn) reset();
  else start();
});

render();
