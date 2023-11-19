class Animal {};
class Dog extends Animal {};

// var checkIfInstanceOf = function(obj, classFunction) {
//     let type = Object.prototype.toString.call(obj)
//     console.log(type);
//     if(classFunction == type){
//         return true;
//     }
//     else {return false;}
// };

var checkIfInstanceOf = function(obj, classFunction) {
    if (classFunction === Number) {
        return typeof obj === 'number';
    } else if (classFunction === String) {
        return typeof obj === 'string';
    } else if (classFunction === Boolean) {
        return typeof obj === 'boolean';
    } else {
        return obj instanceof classFunction;
    }
};


checkIfInstanceOf(new Dog(), Animal); 
