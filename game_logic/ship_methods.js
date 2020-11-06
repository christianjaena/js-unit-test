const checkForShip = (player, coordinates) => {
	let isShipFound, ship;
	for (let i = 0; i < player.ships.length; i++) {
		ship = player.ships[i];
		isShipFound = ship.locations.filter(location => {
			return location[0] === coordinates[0] && location[1] === coordinates[1];
		})[0];

		if (isShipFound) return true;
	}
	return false;
};

module.exports.checkForShip = checkForShip;
