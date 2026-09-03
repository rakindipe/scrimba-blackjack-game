/*
At some point use replace the random function below with
a fetch request to the deckofcardsapi to simulate playing with a 
real deck of card
*/

// fetch request to api --> use LATER!!!
fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });

// generate random numbers of cards
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let firstCard = getRandomInt(2, 11);
let secondCard = getRandomInt(2, 11);
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");

const startGame = () => {
  sumEl.textContent = `Sum: ${sum}`;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
};
