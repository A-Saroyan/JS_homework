const  EventEmittter  = require('events')

const event = new EventEmittter()
event.on('greeting',()=> {console.log("Hello,World !")});


event.emit('greeting');