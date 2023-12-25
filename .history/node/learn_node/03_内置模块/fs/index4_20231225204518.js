const fs = require('fs')

console.log(fs.statSync('./data.txt'));

// Stats {
//     dev: 1109529044,
//     mode: 33206,
//     nlink: 1,
//     uid: 0,
//     gid: 0,
//     rdev: 0,
//     blksize: 4096,
//     ino: 281474977391683,
//     size: 33,
//     blocks: 0,
//     atimeMs: 1703507070606.9236,
//     mtimeMs: 1703505679968.5784,
//     ctimeMs: 1703505679968.5784,
//     birthtimeMs: 1703505648016.6453,
//     atime: 2023-12-25T12:24:30.607Z,
//     mtime: 2023-12-25T12:01:19.969Z,       maketime
//     ctime: 2023-12-25T12:01:19.969Z,
//     birthtime: 2023-12-25T12:00:48.017Z
//   }


console.log(fs.isDirectory('./data.txt'));