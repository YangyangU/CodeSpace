let val = 'wdawd'
function getType(val){
    if(val === null){
        return 'null'
    }else if (typeof val === 'object'){
        return Object.prototype.toString.call(val).slice(8,-1).toLowerCase()
    }else{
        return typeof val
    }
}

console.log(getType(val));