'use strict';
const Elevator = require('./elevator.js');
const Person = require("./person.js");

const elevator = new Elevator();
let passenger = new Person("Dominik", 0, 4);

elevator.start();
