const  EventEmitter  = require('events')

const event =  new EventEmitter();

event.on('status',()=> {
    console.log("Devops is essential ");
})
event.on('status', () => {
    console.log("Hacking is Fun")
})

event.emit("status");