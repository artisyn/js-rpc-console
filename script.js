// Style variables for styling the console output
const styleBlack24px = 'color:#ccccb7; font-size:24px';
const styleRed24px = 'color: red; font-size:24px';
const styleRed32px = 'color: red; font-size:32px';
const styleYellow32px = 'color: yellow; font-size:32px';
const styleOrange32px = 'color: orangered; font-size:32px';
const styleGreen32px = 'color: green; font-size:32px';
const styleRpc = 'color: #c4834b; font-size:24px';
const styleCommand =
	'color: #3facf6; background-color: #595959; font-size:28px; font-style: italic; padding: .2rem 1rem';
// Initial console messages
console.log(
	'%cWelcome To %cRock Paper Scissors %cCONSOLE EDITION',
	styleBlack24px,
	styleOrange32px,
	styleBlack24px
);
console.log(
	'%cIf you want to see instructions type: \n%cgame.help()',
	styleBlack24px,
	styleCommand
);
// Main game Object, containing all variables and logic
const game = {
	optionsArray: ['rock', 'paper', 'scissors'],
	pickEmoji: function (str) {
		let emoji = '';
		switch (str) {
			case 'rock':
				emoji = '🤜';
				break;
			case 'paper':
				emoji = '🖐';
				break;
			case 'scissors':
				emoji = '✌';
				break;
		}
		return emoji;
	},

	determineWinner: (player1, player2) => {
		// if both are the same
		if (player1 === player2) return 'draw';
		// if player1 = rock
		if (player1 === 'rock') {
			if (player2 === 'scissors') return 'player1';
			if (player2 === 'paper') return 'player2';
		}
		//if player1 = paper
		if (player1 === 'paper') {
			if (player2 === 'rock') return 'player1';
			if (player2 === 'scissors') return 'player2';
		}
		//if player1 = scissors
		if (player1 === 'scissors') {
			if (player2 === 'rock') return 'player2';
			if (player2 === 'paper') return 'player1';
		}
	},
	// using function to enable this keyword
	pickRandomOption: function () {
		return this.optionsArray[
			Math.floor(Math.random() * this.optionsArray.length)
		];
	},
	help: function () {
		console.log(
			'%c1: Pick an option to play with (%crock paper or scissors%c); \n2: Remember: \nPaper %cbeats%c Rock \nRock %cbeats%c Scissors \nScissors %cbeats%c Paper \n3: Type %cgame.play(your option) %c press ENTER and see the results!',
			styleBlack24px,
			styleRpc,
			styleBlack24px,
			styleRed24px,
			styleBlack24px,
			styleRed24px,
			styleBlack24px,
			styleRed24px,
			styleBlack24px,
			styleCommand,
			styleBlack24px
		);
		return 'GOOD LUCK';
	},
	//Main game function
	play: function (option) {
		const playerOption = option.toLowerCase();
		console.log(playerOption);
		//check for wrong input
		if (
			playerOption !== 'rock' &&
			playerOption !== 'scissors' &&
			playerOption !== 'paper'
		) {
			console.log(`%cWrong Option, Please Try Again`, styleRed24px);
			return 'HINT: choose Rock, Paper or Scissors';
		}

		const computerOption = this.pickRandomOption();
		const winner = this.determineWinner(playerOption, computerOption);
		if (winner === 'draw') {
			console.log(
				`%cYou Chose: %c${this.pickEmoji(
					playerOption
				)} %c\nComputer Chose: %c${this.pickEmoji(
					computerOption
				)} \n%cIt's a %cDRAW! 🤝`,
				styleBlack24px,
				styleOrange32px,
				styleBlack24px,
				styleOrange32px,
				styleBlack24px,
				styleGreen32px
			);
		}
		if (winner === 'player1') {
			console.log(
				`%cYou Chose: %c${this.pickEmoji(
					playerOption
				)}  \n%cComputer Chose: %c${this.pickEmoji(
					computerOption
				)} \n%cLooks Like You %cWon 🏆! `,
				styleBlack24px,
				styleOrange32px,
				styleBlack24px,
				styleOrange32px,
				styleBlack24px,
				styleGreen32px
			);
		}
		if (winner === 'player2') {
			console.log(
				`%cYou Chose: %c${this.pickEmoji(
					playerOption
				)}  \n%cComputer Chose: %c${this.pickEmoji(
					computerOption
				)} \n%cBetter Luck Next Time, You %cLost 😥! `,
				styleBlack24px,
				styleOrange32px,
				styleBlack24px,
				styleOrange32px,
				styleBlack24px,
				styleRed32px
			);
		}
		return 'Thanks for Playing';
	},
};
