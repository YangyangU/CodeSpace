//创建子进程实现多线程
// 单线程没办法同时处理多个任务

// node在主进程里面开辟一个子进程，将异步放到子进程执行

const ChildProcess = require('child_process');

const {spawn,spawnSync} = ChildProcess

//linux - pwd
//windows - chdir
const chdir = spawnSync('chdir')