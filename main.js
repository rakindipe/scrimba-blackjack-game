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

const startGame = () => {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the game! 😭";
    isAlive = false;
  }
  console.log(message);
};
