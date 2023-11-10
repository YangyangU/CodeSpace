s = "Hello World"

var lengthOfLastWord = function(s) {
    let n = 0;
    let ans = 0;
    let arr = s.split('')
    for(var i = arr.length -1; i >= 0; i--) {
        if(arr[i] === ' '){
            arr.pop();
        }else{
            break;
        }
    }  
    if(arr[arr.length-1]==' '){
        n = arr.lastIndexOf(' ')-1;
    
        ans++
    }else{
        n = arr.lastIndexOf(' ')
        for(let i = n+1; i < arr.length; i++){
            ans++
        }
    }
    return ans;
};

console.log(lengthOfLastWord(s));