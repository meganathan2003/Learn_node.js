console.log("tesing");

// import the uuid

// const { v4: uuid } = require('uuid');
const logEvents = require('../Event Emitter/logs/log')
const EventEmitter = require('events');

console.log(logEvents);

class MyEmitter extends EventEmitter {}

// Creating the obj for emitter
const myEmitter = new MyEmitter();

myEmitter.on('log', (msg) => {
    logEvents(msg);
});

myEmitter.emit("log", "Log Event emitted");
