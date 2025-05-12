const  EventEmitter  = require('events')

const event = new EventEmitter()
event.on('greeting',()=> {console.log("Hello,World !")});


event.emit('greeting');