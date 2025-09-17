const Eventemitter = require("events");
const eventemitter = new Eventemitter();

eventemitter.on("first event", ()=>(
console.log("Successfully wrote my first event in Node JS")
))

eventemitter.on("first event", ()=>(
console.log("Hellooooo i have Successfully wrote my first event in Node JS")
))

eventemitter.on("second event", ()=>(
    console.log("Successfully wrote my second event in Node JS")
))

eventemitter.once("pushnotify once", ()=>(
    console.log("this event will only happen once")
))

// Emitting an event
eventemitter.emit("first event");

// Using listerners
const Mylister =  ()=>(
    console.log("This is a listener")
)

eventemitter.on("first event with listener", Mylister);

eventemitter.emit("first event with listener");
eventemitter.emit("first event with listener");
eventemitter.removeListener("first event with listener" , Mylister);

console.log(eventemitter.listeners("first event"));