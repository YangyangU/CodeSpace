//创建子进程实现多线程
// 单线程没办法同时处理多个任务

// node在主进程里面开辟一个子进程，将异步放到子进程执行

const ChildProcess = require('child_process');

const {spawn,spawnSync} = ChildProcess

//进程是加载上下文需要的时间
//创建一个进程

//linux - pwd
//windows - chdir
const pwd = spawnSync('pwd')

console.log(pwd.stdout);

const ls = spawnSync('ls',['-lh'])

console.log(ls);