class Elevator {
  constructor() {
    this.floor = 0;
    this.MAXFLOOR = 10;
    this.requests = [];
    this.direction = "up";
  }

  start() {
    this.interval = setinterval(() => this.update(), 1000);
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
    }
  }

  floorDown() {
    if (this.floor < 1) {
      this.floor--;
    }
  }

  call() {}
  log() {
    console.log(`Direction: ${this.direction} | Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
