//子进程

process.on('message',()=>{
    console.log(`来自父进程的消息:${msg}`);
    process.send(msg);
})