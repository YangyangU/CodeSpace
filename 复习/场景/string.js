str = '1,2,3-4,10'

function fn(str){
    arr = str.split(',')
    newStr = arr.join('-')
    newArr = newStr.split('-')
    for(var i=0; i < newArr.length; i++){
        if(Number(newArr[i])>=Number(newArr[i+1])){
            return false
        }
    }
    return true
}



console.log(fn(str));