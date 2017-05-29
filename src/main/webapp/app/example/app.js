

var User = require ('./user');// module.exports = User
var db = require('db');

db.connect();
function run(){
    var vasia = new User("Vasia");
    var pet = new User ("Pet");
//---------
    /*require ('./user');             // global
     var vasia = new User("Vasia");  // global
     var pet = new User ("Pet");     // global*/
    vasia.hello(pet);
    console.log(db.getPhrase('connect'));
}


if (module.parent) {
    exports.run = run;
}
else{
    run();
}