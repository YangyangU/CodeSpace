// var minOperations = function(boxes) {
//     let res = []
//     let map = new Map()
//     let len = boxes.length
//     for(let i = 0 ; i<len;i++){
//         map.set(i,boxes[i])
//     }
//     for(let i = 0 ; i<len;i++){
//         let count = 0
//         map.forEach((v,k)=>{
//             if(v == 1){
//                 count += Math.abs(k-i)
//             }
//         })
//         res.push(count)
//     }
//     return res
// };


var minOperations = function(boxes) {
    let res = []
    let len = boxes.length
    let val = 0
    for(let i = 0 ; i<len;i++){
        for(let j = 0 ; j<len;j++){
            if(boxes[j] == 1){
                val += Math.abs(j-i)
            }
        }
        res.push(val)
    }
    return res
};
minOperations('110')