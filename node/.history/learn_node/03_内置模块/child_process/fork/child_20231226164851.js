//子进程

const fork = require('child_process').fork;

const child = fork('child.js')//使用fork方法创建一个子进程