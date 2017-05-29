var phrases;

exports.connect = function () {
    phrases = require('./ru');
};

exports.getPhrase = function (name) {
    if(!phrases[name]){
        throw new Error(" Don't have this phases" + name);
    }
    return  phrases[name];
}