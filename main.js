// generate random numbers of cards
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let firstCard = getRandomInt(2, 11);
let secondCard = getRandomInt(2, 11);
let sum = firstCard + secondCard;

console.log(firstCard);
console.log(secondCard);
console.log(sum);
