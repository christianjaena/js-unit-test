const { expect } = require('chai');

describe('GAME INSTANCE FUNCTIONS', () => {
	describe('checkGameStatus', () => {
		it('should tell me when the game is over');
	});
	// MOCKS AND STUBS or PRETEND FUNCTIONS
	// describe('takeTurn', () => {
	// 	const takeTurn = require('../game_logic/ship_methods').takeTurn;
	// 	let guess, player;

	// 	beforeEach(() => {
	// 		// PRETEND FUNCTION
	// 		guess = () => {
	// 			return [0, 0];
	// 		};
	// 		player = {
	// 			ships: [
	// 				{
	// 					locations: [[0, 0]],
	// 				},
	// 			],
	// 		};
	// 	});

	// 	it('should return false if the game ends', () => {
	// 		let actual = takeTurn(player, guess)
	// 		expect(actual).to.be.false;
	// 	})
	// });

	// ASYNCHRONOUS
	const saveGame = callback => {
		setTimeout(() => {
			callback();
		}, 1000);
	};

	describe('saveGame', () => {
		it('should update save status', done => {
			let status = 'game not saved ...';
			saveGame(() => {
				status = 'game saved!';
				expect(status).to.equal('game saved!');
				done();
			});
		});
	});
});
