//
// This is only a SKELETON file for the 'Poker' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const pointsOfCards = {
	'2': 2,
	'3': 3,
	'4': 4,
	'5': 5,
	'6': 6,
	'7': 7,
	'8': 8,
	'9': 9,
	'10': 10,
	'J': 11,
	'Q': 12,
	'K': 13,
	'A': 14
}

let combinations = {
	'high card': 1,
	'one pair': 2,
	'two pairs': 3,
	'three of a kind': 4,
	'straight': 5,
	'flush': 6,
	'full house': 7,
	'four of a kind': 8,
	'straight flush': 9
}

export const bestHands = (hands) => {
	if (hands.length === 1) return hands;

	hands = hands.map(hand => {
		let cards = hand.split(' ').map(card => {
			let value = pointsOfCards[card.slice(0, card.length - 1)];
			let suit = card[card.length - 1];
			return ({
				value,
				suit
			})
		});
		cards.sort((a, b) => a.value - b.value);

		let isFlush = true;
		for (let i = 1; i < cards.length; i++) {
			if (cards[i].suit !== cards[0].suit) {
				isFlush = false;
			}
		}

		let cardsObj = {};

		for (let i = 0; i < cards.length; i++) {
			if (!cardsObj[cards[i].value]) { cardsObj[cards[i].value] = 0 };
			cardsObj[cards[i].value] += 1;
		}

		let cardsObjEntries = Object.entries(cardsObj).map(([value, counter]) => ({ value: Number(value), counter }));
		let maxStreak = cardsObjEntries[0];

		for (let i = 0; i < cardsObjEntries.length; i++) {
			if (cardsObjEntries[i].counter > maxStreak.counter || (cardsObjEntries[i].counter === maxStreak.counter && cardsObjEntries[i].value > maxStreak.value)) {
				maxStreak = cardsObjEntries[i]
			}
		}

		let cardValues = cardsObjEntries.map(el => el.value);

		let isLowStraight = false;
		for (let i = 0; i < cardValues.length; i++) {
			if (![14, 2, 3, 4, 5].includes(cardValues[i])) {
				break;
			}
			if (i === cardValues.length - 1) {
				isLowStraight = true;
			}
		}

		let isSraight = cardValues.length === 5 && (
			cardValues.filter(value => cardValues.some(el => el === value + 1)).length === 4 ||
			isLowStraight
		);

		if (isFlush && isSraight) {
			return ({
				string: hand,
				combination: combinations['straight flush'],
				value: isLowStraight ? 5 : maxStreak.value,
				highCard: 0
			})
		}

		if (maxStreak.counter === 4) {
			return ({
				string: hand,
				combination: combinations['four of a kind'],
				value: maxStreak.value,
				highCard: cards.find(card => card.value !== maxStreak.value).value
			})
		}

		if (maxStreak.counter === 3 && cardsObjEntries.length === 2) {
			return ({
				string: hand,
				combination: combinations['full house'],
				value: maxStreak.value * 14 + cardsObjEntries.find(streak => streak.value !== maxStreak.value).value,
				highCard: cards.find(card => card.value !== maxStreak.value).value
			})
		}

		if (isFlush) {
			return ({
				string: hand,
				combination: combinations['flush'],
				value: cards[cards.length - 1].value,
				highCard: 0
			})
		}

		if (isSraight) {
			return ({
				string: hand,
				combination: combinations['straight'],
				value: isLowStraight ? 5 : maxStreak.value,
				highCard: 0
			})
		}

		if (maxStreak.counter === 3) {
			let otherCards = cards
				.filter(card => card.value !== maxStreak.value)
				.map(card => card.value)
				.sort((a, b) => a - b);
			return ({
				string: hand,
				combination: combinations['three of a kind'],
				value: maxStreak.value,
				highCard: otherCards[1] * 14 + otherCards[0]
			})
		}

		if (maxStreak.counter === 2) {
			let otherCards = cards
				.filter(card => card.value !== maxStreak.value)
				.map(card => card.value)
				.sort((a, b) => a - b);

			if (cardValues.length === 3) {
				let otherPair = cardsObjEntries
					.find(streak => streak.value !== maxStreak.value && streak.counter === 2);
				otherCards = otherCards
					.filter(value => value !== otherPair.value);
				return ({
					string: hand,
					combination: combinations['two pairs'],
					value: maxStreak.value * 14 + otherPair.value,
					highCard: otherCards[0]
				})
			}

			return ({
				string: hand,
				combination: combinations['one pair'],
				value: maxStreak.value,
				highCard: otherCards[2] * 14 * 14 + otherCards[1] * 14 + otherCards[0]
			})
		}

		let otherCards = cards
			.map(card => card.value)
			.sort((a, b) => a - b);

		return ({
			string: hand,
			combination: combinations['high card'],
			value: otherCards[4] * 14 * 14 * 14 * 14 + otherCards[3] * 14 * 14 * 14 + otherCards[2] * 14 * 14 + otherCards[1] * 14 + otherCards[0],
			highCard: 0
		})
	});

	hands.sort((a, b) => {
		if (a.combination > b.combination) return 1;
		if (a.combination < b.combination) return -1;
		if (a.value > b.value) return 1;
		if (a.value < b.value) return -1;
		if (a.highCard > b.highCard) return 1;
		if (a.highCard < b.highCard) return -1;
		return 0;
	});

	let winners = [hands.pop()];
	let last = hands.pop();

	while (winners[winners.length - 1].combination === last.combination && winners[winners.length - 1].value === last.value && winners[winners.length - 1].highCard === last.highCard) {
		winners.unshift(last);
		last = hands.pop();
	}

	return winners.map(el => el.string);
};
