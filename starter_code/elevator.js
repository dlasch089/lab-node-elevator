var _ = require('lodash');

class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.interval = setInterval(() => this.update(), 1000); // The Arrow Function does not need a second context
  }

  stop() {
    clearInterval(this.interval);
  }

  update() {
    this.log();
  }

  _passengersEnter() {}
  _passengersLeave() {}
  floorUp() {
    if (this.floor < this.MAXFLOOR) {
      this.floor++;
    } else {
      console.log(`You are in the top-floor`);
    }
  }

  floorDown() {
    if (this.floor >= 1) {
      this.floor--;
    } else {
      console.log(`You are in the ground level`);
    }
  }

  call() {}
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
