//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const commands = (number) => {
  const binary = number.toString(2);
  const actions = [];
  if (+binary[binary.length - 1] === 1) {
    actions.push('wink');
  }
  if (+binary[binary.length - 2] === 1) {
    actions.push('double blink');
  }
  if (+binary[binary.length - 3] === 1) {
    actions.push('close your eyes');
  }
  if (+binary[binary.length - 4] === 1) {
    actions.push('jump');
  }
  if (+binary[binary.length - 5] === 1) {
    actions.reverse();
  }
  return actions;
};
