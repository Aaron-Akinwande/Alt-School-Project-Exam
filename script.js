let hours = 0,
  minutes = 0,
  seconds = 0,
  milliseconds = 0;
let timer = null;
let running = false;
let lapCount = 0;

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent =
    `${String(hours).padStart(2, "0")}:` +
    `${String(minutes).padStart(2, "0")}:` +
    `${String(seconds).padStart(2, "0")}.` +
    `${String(milliseconds).padStart(3, "0")}`;
}

function timerCycle() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  updateDisplay();
}

document.getElementById("startStop").addEventListener("click", () => {
  if (!running) {
    timer = setInterval(timerCycle, 10);
    document.getElementById("status").textContent = "RUNNING";
    document.getElementById("startStop").textContent = "Stop";
    running = true;
  } else {
    clearInterval(timer);
    document.getElementById("status").textContent = "PAUSED";
    document.getElementById("startStop").textContent = "Start";
    running = false;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timer);
  hours = minutes = seconds = milliseconds = 0;
  lapCount = 0;
  updateDisplay();
  document.getElementById("laps").innerHTML = "";
  document.getElementById("status").textContent = "CLEAR";
  document.getElementById("startStop").textContent = "Start";
  running = false;
});

document.getElementById("lap").addEventListener("click", () => {
  if (running) {
    lapCount++;
    const lapTime =
      `${String(hours).padStart(2, "0")}:` +
      `${String(minutes).padStart(2, "0")}:` +
      `${String(seconds).padStart(2, "0")}.` +
      `${String(milliseconds).padStart(3, "0")}`;
    const lapItem = document.createElement("li");
    lapItem.textContent = `Lap ${lapCount}: ${lapTime}`;
    document.getElementById("laps").appendChild(lapItem);
  }
});

updateDisplay();
