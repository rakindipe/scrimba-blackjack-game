/*
At some point use replace the random function below with
a fetch request to the deckofcardsapi to simulate playing with a 
real deck of card

when doing this make sure you branch it out on github!
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

// variables
let firstCard = getRandomInt(2, 11);
let secondCard = getRandomInt(2, 11);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// start game
const startGame = () => {
  renderGame();
};

// blackjack game logic
const renderGame = () => {
  sumEl.textContent = `Sum: ${sum}`;
  // cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
  cardsEl.textContent = `Cards: ${cards}`;

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

// draw new card
const newCard = () => {
  console.log("Drawing a new card from the deck!");

  let card = getRandomInt(2, 11);

  sum += card;
  cards.push(card);
  console.log(sum);

  renderGame();
};
