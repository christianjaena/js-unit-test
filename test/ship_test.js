const { fire } = require('../game_logic/ship_methods');

const expect = require('chai').expect;

describe('checkForShip', () => {
	const checkForShip = require('../game_logic/ship_methods').checkForShip;
	let player;

	before(() => {
		player = {
			ships: [
				{
					locations: [
						[0, 0],
						[0, 1],
					],
				},
				{
					locations: [
						[1, 0],
						[1, 1],
					],
				},
			],
		};
	});
	it('should correctly report no ship at a given players coordinate', () => {
		expect(checkForShip(player, [9, 9])).to.be.false;
	});

	it('should correctly report a ship at a given players coordinate', () => {
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
	});

	it('should correctly report no ship at a given players multiple coordinates', () => {
		expect(checkForShip(player, [0, 2])).to.be.false;
	});

	it('should correctly report a ship at a given players multiple coordinates', () => {
		expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
	});

	it('should correctly report no ship at a given players multiple coordinates and ships', () => {
		expect(checkForShip(player, [0, -1])).to.be.false;
		expect(checkForShip(player, [-1, -1])).to.be.false;
	});

	it('should correctly report a ship at a given players multiple coordinates and ships', () => {
		expect(checkForShip(player, [0, 0])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [0, 1])).to.deep.equal(player.ships[0]);
		expect(checkForShip(player, [1, 0])).to.deep.equal(player.ships[1]);
		expect(checkForShip(player, [1, 1])).to.deep.equal(player.ships[1]);
	});
});

describe('damageShip', () => {
	const damageShip = require('../game_logic/ship_methods').damageShip;

	it('should register damage on a given ship at a given location', () => {
		const ship = {
			locations: [[0, 0]],
			damage: [],
		};
		damageShip(ship, [0, 0]);
		expect(ship.damage).to.not.be.empty;
		expect(ship.damage[0]).to.deep.equal([0, 0]);
	});
});

describe('fireShip', () => {
	const fire = require('../game_logic/ship_methods').fire;
	let player;

	beforeEach(() => {
		player = {
			ships: [
				{
					locations: [[0, 0]],
					damage: [],
				},
			],
		};
	});

	after(() => {
		console.log('entire test suite completed');
	});

	afterEach(() => {
		console.log('one unit test completed');
	});

	it('should record damage on the given players ship at a given coordinate', () => {
		fire(player, [0, 0]);
		expect(player.ships[0].damage[0]).to.deep.equal([0, 0]);
	});

	it('should NOT record damage if there is no ship at my coordinates', () => {
		fire(player, [9, 9]);
		expect(player.ships[0].damage).to.be.empty;
	});
});
