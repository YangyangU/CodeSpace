let lines = ['192.168.1.1','192.168.1.2','192.168.1.1']

const findMost = (arr)=>{
    const obj = {}
    let ip='',max = 0
    for(let i=0;i<arr.length;i++){
        const item = arr[i];
        if(item in obj){
            obj[item] = obj[item] + 1

            if(obj[item] > max){
                max = obj[item]
                ip = item
            }
        }else{
            obj[item] = 1
        }
    }

    // let ip='',max = 0
    // for(let key in obj){
    //     if(obj[key] > max){
    //         max = obj[key]
    //         ip = key
    //     }
    // }
    return ip
}

console.log(findMost(lines));