// console.log(process);

//输入 node 2.js hello

// argv: [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\CodeSpace\\node\\spider\\base\\2.js',
//     'hello'
//   ]

// 每打一个空格就多接收一个指令

// console.log(process.argv);

// console.log(process.argv[process.argv.length - 1]);

let player = console.log(process.argv[process.argv.length - 1]);

// 电脑生成一个
let arr = ['rock', 'scissors', 'paper']
let index = Math.floor(Math.random() * arr.length)
let computer = arr[index]
// 比较
if(computer === player){
    console.log('平局');
}else if(
    (computer === 'rock' && player === 'paper')
    (computer === 'paper' && player === 'scissors')
    (computer === 'scissors' && player === 'rock')
){
    console.log();
}