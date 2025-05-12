const EventEmitter = require('events')

const event  = new EventEmitter();

const listener = () => {console.log("Error has been founded !!!")}

event.on("error",listener);

event.emit("error");