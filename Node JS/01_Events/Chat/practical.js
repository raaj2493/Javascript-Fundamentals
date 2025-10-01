const Chatroom = require("./ChatEvent");

const chat = new Chatroom();

chat.on("join", (user) => {
    console.log(`${user} joined the chat`);
});

chat.on("message", (user, msg) => {
    console.log(`${user} : ${msg}`);
});

chat.on("leave", (user) => {
    console.log(`${user} left the chat`);
});

// Executing the methods

chat.join("Raaj");
chat.join("Disha");

chat.sendmessage("Raaj", "Hey Disha");
chat.sendmessage("Disha", "Hey Raaj");

//chat.leave("Tony");
//chat.sendmessage("Tony", "Tony left the chat");