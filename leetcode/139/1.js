var trainingPlan = function(actions) {
    let arr = actions.sort((a,b)=>a-b)
    let res = []
    for(let i=0; i<arr.length; i++){
        if(arr[i] % 2 == 0){
            res.push(arr[i])
        }
        else{
            res.unshift(arr[i])
        }
    }
    return res
};

//黑科技
var trainingPlan = function(actions) {
    return actions.sort(a => a % 2 == 0 ? 1 : -1);
};

console.log(trainingPlan([1, 3, 2, 6, 8, 4, 7, 9, 10, 5]));