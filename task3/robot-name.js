export class Robot {
  static usedNames = new Set();

  constructor() {
    this.reset();
  }

  reset() {
    this._name = Robot.generateName();
  }

  static generateName() {
    const alphabet = 'ABCDEFGHIJKLMNOPRSTUWWXYZ';
    const firstLetter = alphabet[Math.floor(Math.random() * 26)];
    const secondLetter = alphabet[Math.floor(Math.random() * 26)];
    const firstNum = Math.floor(Math.random() * 10);
    const secondNum = Math.floor(Math.random() * 10);
    const thirdNum = Math.floor(Math.random() * 10);
    const name = firstLetter + secondLetter + firstNum + secondNum + thirdNum;
    if (Robot.usedNames.has(name)) {
      return Robot.generateName();
    }
    Robot.usedNames.add(name);
    return name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    throw new Error('Robot name cannot be modified');
  }

  static releaseNames() {
    Robot.usedNames.clear();
  }
}
