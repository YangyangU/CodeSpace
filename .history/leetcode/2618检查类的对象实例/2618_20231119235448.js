func = () => { 
    class Animal {};
    class Dog extends Animal {};
    return checkIfInstance(new Dog(), Animal); 
}


var checkIfInstance = function(obj, classFunction) {
    console.log(obj);
    console.log(classFunction);
    let type = Object.prototype.toString.call(obj).slice(8,-1)
    if(classFunction == type){
        return true;
    }
    else {return false;}
    
};

func()