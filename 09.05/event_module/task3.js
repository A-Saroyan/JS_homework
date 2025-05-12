const EventEmitter = require('events')

const event  = new EventEmitter();

const listener = () => {console.log("Event is on !!!")}

event.on("message",listener)

event.emit("message"); // Event is on !!!

event.removeListener("message",listener);

event.emit("message"); // no output