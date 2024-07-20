//
// This is only a SKELETON file for the 'Rail Fence Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const encode = (str, r) => {
	str = str.replaceAll(' ', '').toUpperCase()
	let railIdx = 0;
	let dir = 1;
	let rails = new Array(r).fill('')
	railIdx = 0;

	for (let i = 0; i < str.length; i++) {
		rails[railIdx] = rails[railIdx] + str[i]
		if (railIdx === r - 1) {
			dir = -1;
		} else if (railIdx === 0) {
			dir = 1;
		}
		railIdx = railIdx + dir;
	}
	return rails.join('');
};

export const decode = (str, r) => {
	let railIdx = 0;
	let dir = 1;
	let rails = new Array(r).fill((new Array(str.length)).fill('*'));
	let letter = 0;
	let res = '';
	
	for (let i = 0; i < r; i++) {
		for (let j = 0; j < str.length; j++) {
			if (i === railIdx) {
				rails[i][j] = str[letter];
				letter++;
			}
			if (railIdx === r - 1) {
				dir = -1;
			}
			else if (railIdx === 0) {
				dir = 1;
			}
			railIdx = railIdx + dir;
		}
		railIdx = 0;
	}
	for (let k = 0; k < str.length; k++) {
		res = res + rails[railIdx][k];
		if (railIdx === r - 1) {
			dir = -1;
		}
		else if (railIdx === 0) {
			dir = 1;
		}
		railIdx = railIdx + dir;
	}
	return res;
};
