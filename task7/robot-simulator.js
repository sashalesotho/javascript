//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
	constructor(message) {
		super();
		this.message = message || 'Invalid Input';
	}
}

export class Robot {
	constructor() {
		this.directions = ['north', 'east', 'south', 'west'];
		this.dirIdx = 0;
		this._coordinates = [0, 0];
	}

	get bearing() {
		return this.directions[this.dirIdx];
	}

	get coordinates() {
		return this._coordinates;
	}

	place({ x, y, direction }) {
		if (this.directions.indexOf(direction) < 0) {
			throw new InvalidInputError();
		}
		this._coordinates[0] = x;
		this._coordinates[1] = y;
		this.dirIdx = this.directions.indexOf(direction);
	}

	evaluate(instructions) {
		for (let i = 0; i < instructions.length; i++) {
			if (instructions[i] === 'R') {
				this.dirIdx++;
				if (this.dirIdx > 3) {
					this.dirIdx = 0;
				}
			}
			if (instructions[i] === 'L') {
				this.dirIdx--;
				if (this.dirIdx < 0) {
					this.dirIdx = 3;
				}
			}
			if (instructions[i] === 'A') {
				if (this.bearing === 'north') { this._coordinates[1]++; }
				else if (this.bearing === 'east') { this._coordinates[0]++; }
				else if (this.bearing === 'south') { this._coordinates[1]--; }
				else if (this.bearing === 'west') { this._coordinates[0]--; }
				}
			}
		}
	}
