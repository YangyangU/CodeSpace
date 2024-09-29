const list = [
    {
        name: 'xiaoming',
        id: 1
    }
]

const fn = (list)=>{
    const a = list.map((item)=>{
        return {
            value: item.id,
            label: item.name
        }
    })
    return a
}

console.log(fn(list));
