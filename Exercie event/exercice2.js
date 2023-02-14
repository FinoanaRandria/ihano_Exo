const events = require('events')
const fs = require('fs');
const eventEmmitter = new events.EventEmitter();




/* handeler */

const handeler1 = ()=>{
    console.log('Bellring handler 1')
    
    console.log('Tom aide moi')
}

const handeler2 = ()=>{
    console.log('Bellring handler 2')
     
     console.log('Desolé y a plus de personne ici laissez votre message svp')
     console.log('\n')
}

eventEmmitter.on('BellRingHandler1',handeler1)


eventEmmitter.emit('BellRingHandler1')

eventEmmitter.on('BellRingHandler2',handeler2)


eventEmmitter.emit('BellRingHandler2')



