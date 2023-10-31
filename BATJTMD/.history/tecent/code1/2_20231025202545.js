function createPhoneNumber(number){
    var format = "(xxx) xxx-xxxx";//模板
    for (let i = 0; i <number.length; i++) {
        format = format.replace('x',number[i]);
    }
    return format
}
createPhoneNumber([1,2,3,4,5,6,7,8,9,0]);