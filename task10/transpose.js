//
// This is only a SKELETON file for the 'Transpose' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const transpose = (input) => {
	let res = [];
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[i].length; j++) {
			let el = input[i][j];
			let length = 0;

			if (res[j]) {
				length = res[j].length;
			}
			if (i > length) {
				el = el.padStart(i - length + 1, ' ');
			}
			if (res[j]) {
				res[j] += el
			} else {
				res[j] = el;
			}
		}
	}
	return res;
};