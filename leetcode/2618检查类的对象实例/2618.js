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

// var checkIfInstanceOf = function(obj, classFunction) {
//     if (classFunction === Number) {
//         return typeof obj === 'number';
//     } else if (classFunction === String) {
//         return typeof obj === 'string';
//     } else if (classFunction === Boolean) {
//         return typeof obj === 'boolean';
//     } else if (classFunction === BigInt) {
//         return typeof obj === 'bigint';
//     } else if (classFunction === Symbol) {
//         return typeof obj === 'symbol';
//     } else {
//         return obj instanceof classFunction;
//     }
// };


var checkIfInstanceOf = function (obj, classFunction) {
    if (obj === null || obj === undefined || !(classFunction instanceof Function))
      return false;
    return Object(obj) instanceof classFunction;
  };

checkIfInstanceOf(new Dog(), Animal); 
