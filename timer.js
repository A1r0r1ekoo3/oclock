const counter = document.querySelector("#counter");
const startBtn = document.querySelector("#start-btn");
const restartBtn = document.querySelector("#restart-btn");
const pouseBtn = document.querySelector("#pouse-btn");

let a = 0;

startBtn.addEventListener("click", () => {
  let timerInterval = setInterval(() => {
    a++;
    counter.textContent = a;
    if (counter.textContent > 0) {
      counter.style.color = "blue";
    }
  }, 1000);
  restartBtn.addEventListener("click", () => {
    a = 0;
    // counter.textContent = "0";
    counter.style.color = "black";
    clearInterval(timerInterval);
  });

  pouseBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
  });
});
