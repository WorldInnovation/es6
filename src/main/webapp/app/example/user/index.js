var db = require('db');
var log = require('logger')(module);
//db.connect(); - ! don't need because cashing in parent

function User (name) {
    this.name = name;

}

User.prototype.hello = function (who) {
    console.log(db.getPhrase('hello') + ", " + who.name);
}

console.log("user require");

module.exports = User; // export only function User
//exports.User = User; //local exports
//global.User = User; //global exports