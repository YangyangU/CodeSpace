func = () => { 
    class Animal {};
    class Dog extends Animal {};
    return checkIfInstance(new Dog(), Animal); 
}


var checkIfInstance = function(obj, classFunction) {
    // console.log(obj);
    // console.log(classFunction);
    if(classFunction === Object.prototype.toString.call(obj).slice(8,-1)){
        return true;
    }
    else {return false;}
    
};

func()