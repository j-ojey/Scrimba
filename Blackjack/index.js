let firstCard = 10;
let secondCard = 2;
let sum = firstCard + secondCard;
let cards = [firstCard, secondCard]
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById("sum-el");

function startGame() {
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message
}

function newCard(){
    let thirdCard = Math.floor(Math.random()*11)
    cards.push(thirdCard)
    sum += thirdCard
    renderGame()
}