const EventEmitter = require("events");

class Chatroom extends EventEmitter {
    constructor() {
        super();
        this.users = new Set();
    }

    join(user) {
        this.users.add(user);
        this.emit("join", user);
    }

    sendmessage(user, msg) {
        if (this.users.has(user)) {
            this.emit("message", user, msg);
        } else {
            console.log(`${user} : ${msg}`);
        }
    }

    leave(user) {
        if (this.users.has(user)) {
            this.users.delete(user);
            this.emit("leave", user);
        }
    }
}

module.exports = Chatroom;