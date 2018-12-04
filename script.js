

let startBtn = document.querySelector('.start');
let player;
let computerChoices = ['rock', 'paper', 'scissors'];
let computer;
let random = Math.floor(Math.random() * 3);
let again = document.querySelector('.display__again');



startBtn.addEventListener('click', function() {
	// selecting elements
	let wrapper = document.querySelector('.wrapper');
	let body = document.getElementById('body');

	// add class to parent to trigger subsequent css classes on children 
	wrapper.classList.add('gameStart');

	// add class to body to toggle body background color
	body.classList.add('bodyBG');
    
});



// use event delegation to add click event to children of choices. Our choices Rock, Paper, and Scissors
const parent = document.getElementById('choices');

parent.addEventListener('click', function(event) {
	event.target.classList.add('choice__selected');

	let results = document.querySelector('.display__results');
	let result = document.querySelector('.display__result');
	let details = document.querySelector('.display__details');

	player = event.target.innerHTML;
	player = player.toLowerCase();
	results.classList.add('display__results--open');

	// generate random computer choice from array
	computer = computerChoices[random];
	computer = computer.toLowerCase();

	// RPS Logic
	if (player === 'rock') {
		if (computer === 'scissors') {
			result.innerHTML = 'YOU WIN';
			details.innerHTML = 'You beat computers ' + computer + ' with your ' + player + '!';
		} else if (computer === 'paper') {
			result.innerHTML = 'YOU LOSE';
			details.innerHTML = 'Computer beat your ' + player + ' with its ' + computer + '!';
		} else {
			result.innerHTML = 'TIE';
			details.innerHTML = 'No one is a winner today';
		}
	} else if (player === 'scissors') {
		if (computer === 'paper') {
			result.innerHTML = 'YOU WIN';
			details.innerHTML = 'You beat computers ' + computer + ' with your ' + player + '!';
		} else if (computer === 'rock') {
			result.innerHTML = 'YOU LOSE';
			details.innerHTML = 'Computer beat your ' + player + ' with its ' + computer + '!';
		} else {
			result.innerHTML = 'TIE';
			details.innerHTML = 'No one is a winner today';
		}
	} else if (player === 'paper') {
		if (computer === 'rock') {
			result.innerHTML = 'YOU WIN';
			details.innerHTML = 'You beat computers ' + computer + ' with your ' + player + '!';
		} else if (computer === 'scissors') {
			result.innerHTML = 'YOU LOSE';
			details.innerHTML = 'Computer beat your ' + player + ' with its ' + computer + '!';
		} else {
			result.innerHTML = 'TIE';
			details.innerHTML = 'No one is a winner today';
		}
	}

	
}, {once: true});

//
// PROBLEM: Need to prevent click event from firing on parent
//


again.addEventListener('click', function() {
	window.location.reload();
});

