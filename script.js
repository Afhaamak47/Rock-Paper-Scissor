const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const userscore = document.getElementById("score");
const compscore = document.getElementById("compscore");
const display = document.getElementById("display");
let items = ["rock", "paper", "scissor"];
let uscore = 0;
let cscore = 0;
let user;
rock.addEventListener("click", function () {
  user = "rock";
  let random = Math.floor(Math.random() * items.length);
  let comp = items[random];

  if (user === comp) {
    display.innerHTML = "It's a draw!";
  } else if (user === "rock" && comp === "scissor") {
    display.innerHTML = "User wins!";
    uscore++;
  } else {
    display.innerHTML = "Computer wins!";
    cscore++;
  }

  // Update the HTML with the latest score
  userscore.innerText = `User Score = ${uscore}`;
  compscore.innerText = `Computer Score = ${cscore}`;
});
paper.addEventListener("click", function () {
  user = "paper";
  let random = Math.floor(Math.random() * items.length);
  let comp = items[random];

  if (user === comp) {
    display.innerHTML = "It's a draw!";
  } else if (user === "paper" && comp === "rock") {
    display.innerHTML = "User wins!";
    uscore++;
  } else {
    display.innerHTML = "Computer wins!";
    cscore++;
  }

  // Update the HTML with the latest score
  userscore.innerText = `User Score = ${uscore}`;
  compscore.innerText = `Computer Score = ${cscore}`;
});
scissor.addEventListener("click", function () {
  user = "scissor";
  let random = Math.floor(Math.random() * items.length);
  let comp = items[random];

  if (user === comp) {
    display.innerHTML = "It's a draw!";
  } else if (user === "scissor" && comp === "paper") {
    display.innerHTML = "User wins!";
    uscore++;
  } else {
    display.innerHTML = "Computer wins!";
    cscore++;
  }

  // Update the HTML with the latest score
  userscore.innerText = `User Score = ${uscore}`;
  compscore.innerText = `Computer Score = ${cscore}`;
});
