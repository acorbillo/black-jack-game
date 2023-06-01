
let startBtn = document.querySelector('#start-game');

let cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let card1 = 0;
let card2 = 0;
let card3 = 0;
let cardSum = 0;

let playerCards = document.querySelector('#cards');
let playerSum = document.querySelector('#sum');
let drawCardBtn = document.querySelector('#draw-card');
let continueBtn = document.querySelector('#continue');
let restartBtn = document.querySelector('#restart');
let message = document.querySelector('#message-el');

let aiCard1 = 0;
let aiCard2 = 0;
let aiCard3 = 0;
let aiCardSum = 0;
let aiCards = document.querySelector('#ai-cards');
let aiSum = document.querySelector('#ai-sum');

function startGame(){

	//Generate random card for player
	card1 = cards[Math.floor(Math.random() * 13)];
	card2 = cards[Math.floor(Math.random() * 13)];

	playerCards.textContent = `Your Cards: ${card1} - ${card2}`; 

	cardSum = card1 + card2;
	playerSum.textContent = `Sum: ${cardSum}`;

	if (cardSum < 21) {
		message.textContent = 'Draw another card?'
		drawCardBtn.style.display = "inline-block";
		continueBtn.style.display = "inline-block";
	} else if (cardSum === 21) {
		message.textContent = 'You got a BlackJack! You win!';
		restartBtn.style.display = 'inline-block';
	} else {
		message.textContent = 'Oops, you lose!'
		drawCardBtn.style.display = 'none';
		continueBtn.style.display = 'none';
		restartBtn.style.display = 'inline-block';
	}

	//Generates random card for computer
	aiCard1 = cards[Math.floor(Math.random() * 11)];
	aiCard2 = cards[Math.floor(Math.random() * 11)];
	aiCard3 = cards[Math.floor(Math.random() * 11)];

	aiCards.textContent = `AI Cards: ${aiCard1} - ${aiCard2} - ${aiCard3}`;
	aiCardSum = aiCard1 + aiCard2 + aiCard3;
	aiSum.textContent = `Sum: ${aiCardSum}`;

	aiCards.style.display = "none";
	aiSum.style.display = "none";

	startBtn.style.display = "none";
}

function drawCard(){

	card3 = cards[Math.floor(Math.random() * 13)];
	playerCards.textContent = `Your Cards: ${card1} - ${card2} - ${card3}`;
	cardSum = card1 + card2 + card3;
	playerSum.textContent = `Sum: ${cardSum}`;

	drawCardBtn.style.display = "none";
	continueBtn.style.display = "none";
}

function result() {

	restartBtn.style.display = "inline-block"

	aiCards.style.display = "block";
	aiSum.style.display = "block";
	if (aiCardSum > 21 && cardSum <= 21){
		message.textContent = 'You Win!';
		drawCardBtn.style.display = 'none';
		continueBtn.style.display = 'none';
	} else if(cardSum > aiCardSum && cardSum <= 21) {
		message.textContent = 'You Win!';
		drawCardBtn.style.display = 'none';
		continueBtn.style.display = 'none';
	} else if (cardSum === aiCardSum || (cardSum > 21 && aiCardSum > 21)) {
		message.textContent = "It's a draw!"
		drawCardBtn.style.display = 'none';
		continueBtn.style.display = 'none';
	} else {
		message.textContent = 'You lose!';
		aiSum.textContent = `Sum: ${aiCardSum}`;
		drawCardBtn.style.display = 'none';
		continueBtn.style.display = 'none';
	}
}

function restart() {
	startGame();
	restartBtn.style.display = 'none';

	if (message.textContent == "You got a BlackJack! You win!" || message.textContent == "Oops, you lose!") {
		restartBtn.style.display = 'inline-block';		
	}
}