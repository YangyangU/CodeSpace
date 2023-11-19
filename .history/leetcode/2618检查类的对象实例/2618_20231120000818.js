
class Animal {};
class Dog extends Animal {};



var checkIfInstanceOf = function(obj, classFunction) {
    let type = Object.prototype.toString.call(obj)
    console.log(type);
    if(classFunction == type){
        return true;
    }
    else {return false;}
};


checkIfInstanceOf(new Dog(), Animal); 
