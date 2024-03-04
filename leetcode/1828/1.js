var countPoints = function(points, queries) {
    let res = []
    for(let query of queries) {
        let count = 0
        for(let point of points) {
            if(Math.pow(point[0]-query[0],2)+Math.pow(point[1]-query[1],2)<=Math.pow(query[2],2)) {
                count++
            }
        }
        res.push(count)
    }
    return res
};