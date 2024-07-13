//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const allergens = {
	eggs: 1,
	peanuts: 2,
	shellfish: 4,
	strawberries: 8,
	tomatoes: 16,
	chocolate: 32,
	pollen: 64,
	cats: 128
}
export class Allergies {

	constructor(allergyBall) {
		this.allergyBall = allergyBall;
	}

	list() {
		let entries = Object.entries(allergens);
		let res = [];
		if (this.allergyBall === 0) {
			return res
		}
		if (this.allergyBall > 256) {
			this.allergyBall -= 256
		}
		for (let i = entries.length - 1; i >= 0; i--) {
			let key = entries[i][0];
			let value = entries[i][1];
			if (this.allergyBall >= value) {
				this.allergyBall -= value;
				res.unshift(key)
			}
		}
		return res
	}

	allergicTo(allergen) {
		return this.list().includes(allergen)
	}
}
