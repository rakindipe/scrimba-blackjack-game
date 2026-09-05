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

// generate random numbers for cards
const getRandomInt = (min, max) => {
  let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  // count ace as 11 & K, Q, J as 10
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
};

// variables
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message;
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");

// start game
const startGame = () => {
  sum = 0;
  isAlive = true;
  let firstCard = getRandomInt(2, 11);
  let secondCard = getRandomInt(2, 11);

  sum = firstCard + secondCard;
  cards = [firstCard, secondCard];

  renderGame();
};

// blackjack game logic
const renderGame = () => {
  sumEl.textContent = `Sum: ${sum}`;
  // cardsEl.textContent = `Cards: ${cards[0]} ${cards[1]}`;
  // cardsEl.textContent = `Cards: ${cards}`;

  // alt way of rendering cards
  cardsEl.textContent = "Cards: ";
  for (let card of cards) {
    cardsEl.textContent += card + " ";
  }

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
  // console.log("Drawing a new card from the deck!");

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomInt(2, 11);
    sum += card;
    cards.push(card);
    renderGame();
  }
};
