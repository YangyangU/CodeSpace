func = () => { 
    class Animal {};
    class Dog extends Animal {};
    return checkIfInstance(new Dog(), Animal); 
}


var checkIfInstance = function(obj, classFunction) {
    let type = Object.prototype.toString.call(obj)
    if(classFunction == type){
        return true;
    }
    else {return false;}
    
};


func()