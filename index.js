let score = 0;

function addOne(event) {
  event.preventDefault();
  let homeScore = document.querySelector("#home-score");
  score = score + 1;
  homeScore.innerHTML = score;
}

let buttonOne = document.querySelector("#home-1");
buttonOne.addEventListener("click", addOne);
//first add function for the home

function addTwo(event) {
  event.preventDefault();
  let homeScoreTwo = document.querySelector("#home-score");
  score = score + 2;
  homeScoreTwo.innerHTML = score;
}

let buttonTwo = document.querySelector("#home-2");
buttonTwo.addEventListener("click", addTwo);
//second function

function addThree(event) {
  event.preventDefault();
  let homeScoreThree = document.querySelector("#home-score");
  score = score + 3;
  homeScoreThree.innerHTML = score;
}

let buttonThree = document.querySelector("#home-3");
buttonThree.addEventListener("click", addThree);

function ResetScore(event) {
  event.preventDefault();
  score = 0;
  let reset = document.querySelector("#home-score");
  reset.innerHTML = 0;
}

let resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", ResetScore);

function guestOne(event) {
  event.preventDefault();

  let guestScore = document.querySelector("#guest-score");
  score = score + 1;
  guestScore.innerHTML = score;
}

let buttonFirst = document.querySelector("#guest-1");
buttonFirst.addEventListener("click", guestOne);

function guestTwo(event) {
  event.preventDefault();

  let guestScoreTwo = document.querySelector("#guest-score");
  score = score + 2;
  guestScoreTwo.innerHTML = score;
}

let buttonSecond = document.querySelector("#guest-2");
buttonSecond.addEventListener("click", guestTwo);

function guestThree(event) {
  event.preventDefault();

  let guestScoreThree = document.querySelector("#guest-score");
  score = score + 3;
  guestScoreThree.innerHTML = score;
}

let buttonThird = document.querySelector("#guest-3");
buttonThird.addEventListener("click", guestThree);

function resetScoreGuest(event) {
  event.preventDefault();
  score = 0;
  let resetguestOne = document.querySelector("#guest-score");
  resetguestOne.innerHTML = score;
}

let resetButtonGuest = document.querySelector("#reset-guest");
resetButtonGuest.addEventListener("click", resetScoreGuest);
