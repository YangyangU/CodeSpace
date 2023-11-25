// 把金数据的2200给拿到的写法

const getJinData = async()=> {
    let res = [];
    let count = 50;
    let next = 0;
    while (count == 50){
        let url = `'https://jinshuju.net/api/v1/forms/TM8uOr/entries?next=${next}'`
        const rawData = await fetch('')
        const data = await rawData.json();
        count = data.count; 
    }
}