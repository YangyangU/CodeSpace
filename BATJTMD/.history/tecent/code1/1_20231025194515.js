// console.log('hello world');
/**
 *@func 返回固定格式的电话号码  (123) 456-7890
 *@params array [1,2,3,4,5,6,7,8,9,0] 
 *@return (123) 456-7890
 *@author Yangyang_U
 */

function phoneNumber(numbers){
    var a = numbers[0]+numbers[1]+numbers[2];
    var b = numbers[3]+numbers[4]+numbers[5];
    var c = numbers[6]+numbers[7]+numbers[8];
    return "("+a+")"+b+"-"+c
}
phoneNumber([1,2,3,4,5,6,7,8,9,0]);