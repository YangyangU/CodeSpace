func = () => { 
    class Animal {};
    class Dog extends Animal {};
    return checkIfInstanceOf(new Dog(), Animal); 
}


var checkIfInstanceOf = function(obj, classFunction) {
    let type = Object.prototype.toString.call(obj)
    if(classFunction == type){
        return true;
    }
    else {return false;}
};


func()