const EventEmitter = require('events')

const event = new EventEmitter();

const listener = () => { console.log("Clicked once !!!")}

event.once('once',listener);

event.emit('once');
event.emit('once');
event.emit('once');
event.emit('once');
event.emit('once');   // only 1 output => Clicked once !!!