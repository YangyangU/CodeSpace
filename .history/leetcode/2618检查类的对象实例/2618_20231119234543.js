


var checkIfInstanceOf = function(obj, classFunction) {
    if(classFunction === Object.prototype.toString.call(obj).slice(8,-1))
};