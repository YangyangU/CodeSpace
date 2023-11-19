func = () => { 
    class Animal {};
    class Dog extends Animal {};
    return checkIfInstance(new Dog(), Animal); 
}


var checkIfInstanceOf = function(obj, classFunction) {
    if(classFunction === Object.prototype.toString.call(obj).slice(8,-1)){
        return true;
    }
    else return false;
};

func()