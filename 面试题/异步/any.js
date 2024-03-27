let p1 = Promise.resolve(1);
let p2 = Promise.reject(2);
Promise.any([p1, p2])
    .then(
        (val) => {
            console.log(val)
        },
        (res) => {
            console.log(res) //[AggregateError: All promises were rejected] { [errors]: [ '1', '2' ] }
        }
    )


    