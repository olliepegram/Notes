let num = 103.941;

//Customise the amount of decimal places
// console.log(num.toFixed(2));

// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));

let makeGuess = function(guess) {
	let randomNum = Math.floor(Math.random() * 6) + 1;
	console.log(randomNum);
	return guess === randomNum;
}

console.log(makeGuess(3));
