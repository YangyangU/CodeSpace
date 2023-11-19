func = () => { 
    class Animal {};
    class Dog extends Animal {};
    return checkIfInstance(new Dog(), Animal); 
}


// var checkIfInstance = function(obj, classFunction) {
//     console.log(obj);
//     console.log(classFunction);
//     console.log(Object.prototype.toString.call(obj).slice(8,-1));
//     let type = Object.prototype.toString.call(obj).slice(8,-1)
//     if(classFunction == type){
//         return true;
//     }
//     else {return false;}
    
// };

var checkIfInstance = function(obj, classFunction) {
    return obj instanceof classFunction
};

func()