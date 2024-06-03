//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor(status, amount) {
    this.status = status;
    this.amount = amount;
  }

  open() {
    if (this.status === "opened") {
      throw new ValueError();
    } else {
      this.status = "opened";
      this.amount = 0;
    }
  }

  close() {
    if (this.status === "opened") {
      this.status = "closed";
    } else {
      throw new ValueError();
    }
  }

  deposit(money) {
    if (this.status === "closed" || money < 0) throw new ValueError()
      return (this.amount += money);
  }

  withdraw(money) {
    if (this.status === "closed" || this.amount < money || money < 0) throw new ValueError()
    	return (this.amount -= money);
  }

  get balance() {
    if (this.status === "closed") throw new ValueError();
    return this.amount;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}
