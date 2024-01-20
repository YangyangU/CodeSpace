var merge = function(intervals) {
    if (intervals.length = 1 ){
        return intervals
    }
    let res = []
    intervals.sort((a,b)=> a[0] - b[0])

    let prev = intervals[0]

    for(var i =1; i < intervals.length; i++) {
        let cur = intervals[i]
        if(prev[1] >= cur[1]){
            prev[1] = Math.max(prev[1], cur[1])
        }else{
            res.push(prev)
            prev = cur
        }
    }
    res.push(prev)
    return res
};