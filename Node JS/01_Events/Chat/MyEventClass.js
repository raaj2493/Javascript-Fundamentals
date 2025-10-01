const Eventemitter = require("events");

class Chat extends Eventemitter{
    sendmessage(msg){
        console.log(`message sent ${msg}`);
        this.emit("messageReceived", msg);
    }
}

const chat = new Chat();
chat.on("messageReceived", (msg)=>{
    console.log(`new message ${msg}`);
})

chat.sendmessage("hello tony");