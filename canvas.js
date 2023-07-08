"use strict";
//// Task 1
const canvas1 = document.querySelector("#canvas_1");
const ctx1 = canvas1.getContext("2d");
const canvasTask1 = () => {
  ctx1.fillRect(20, 20, 100, 100);
  ctx1.clearRect(40, 40, 60, 60);
  ctx1.strokeRect(45, 45, 50, 50);
};

const clearCanvas1 = () => {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
};

//// Task 2
const canvas2 = document.querySelector("#canvas_2");
const ctx2 = canvas2.getContext("2d");
const canvasTask2 = () => {
  const X = canvas2.width / 2;
  const Y = canvas2.height / 2;
  const R = 45;
  ctx2.beginPath();
  ctx2.arc(X, Y, R, 0, 2 * Math.PI, false);
  ctx2.lineWidth = 3;
  ctx2.strokeStyle = "#FF0000";
  ctx2.stroke();
};
const clearCanvas2 = () => {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
};

//// Task 3
const canvas3 = document.querySelector("#canvas_3");
const ctx3 = canvas3.getContext("2d");
const canvasTask3 = () => {
  ctx3.fillStyle = "rgb(256,0,0)";
  ctx3.fillRect(15, 10, 55, 50);

  ctx3.fillStyle = "rgba(0, 0, 200, 0.6)";
  ctx3.fillRect(35, 30, 55, 50);
};
const clearCanvas3 = () => {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
};

//// Task 4
const canvas4 = document.querySelector("#canvas_4");
const ctx4 = canvas4.getContext("2d");
const canvasTask4 = () => {
  ctx4.beginPath();
  ctx4.moveTo(75, 75);
  ctx4.lineTo(10, 75);
  ctx4.lineTo(10, 25);
  ctx4.fill();
};
const clearCanvas4 = () => {
  ctx4.clearRect(0, 0, canvas4.width, canvas4.height);
};

//// Task 5
const canvas5 = document.querySelector("#canvas_5");
const ctx5 = canvas5.getContext("2d");

const canvasTask5 = () => {
  ctx5.beginPath();
  ctx5.arc(75, 75, 50, 0, Math.PI * 2, true);
  ctx5.moveTo(110, 75);
  ctx5.arc(75, 75, 35, 0, Math.PI, false);
  ctx5.moveTo(55, 65);
  ctx5.arc(60, 65, 5, 0, Math.PI * 2, true);
  ctx5.arc(90, 65, 5, 0, Math.PI * 2, true);
  ctx5.stroke();
};
const clearCanvas5 = () => {
  ctx5.clearRect(0, 0, canvas5.width, canvas5.height);
};

//// Task 6
const canvas6 = document.querySelector("#canvas_6");
const ctx6 = canvas6.getContext("2d");
const canvasTask6 = () => {
  let counter = 0;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
      ctx6.fillStyle =
        "rgb(" +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ")";
      ctx6.beginPath();
      if (i === counter && j === counter) {
        ctx6.arc(15 + j * 25, 15 + i * 25, 10, 0, Math.PI * 2, true);
        ctx6.fill();
        ctx6.stroke();
      }
    }
    counter++;
  }
};
const clearCanvas6 = () => {
  ctx6.clearRect(0, 0, canvas6.width, canvas6.height);
};
