const checkForShip = (player, coordinates) => {
	let isShipFound, ship;
	for (let i = 0; i < player.ships.length; i++) {
		ship = player.ships[i];
		isShipFound = ship.locations.filter(location => {
			return location[0] === coordinates[0] && location[1] === coordinates[1];
		})[0];

		if (isShipFound) return ship;
	}
	return false;
};

const damageShip = (ship, coordinates) => {
	ship.damage.push(coordinates);
};

const fire = (player, coordinates) => {
	const ship = checkForShip(player, coordinates);
	if (ship) damageShip(ship, coordinates);
};

const takeTurn = (opposingPlayer, guessFunction) => {
	let coordinates = guessFunction()
	fire(opposingPlayer, coordinates)
	let gameOver = checkGameStatus()

	return gameOver;
}

module.exports.checkForShip = checkForShip;
module.exports.damageShip = damageShip;
module.exports.fire = fire;
module.exports.takeTurn = takeTurn