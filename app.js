// Gobals - No window!

// __dirname - path to current directory
// __filename - file name 
// require - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being executed 
// console.log(__dirname);
// sayHi('susan');
// sayHi(john);
// sayHi(peter);

// const os = require('os');

// const user = os.userInfo();
// console.log(user);

// method returns the system uptime in seconds
// console.log(`The system uptime is ${os.uptime()}`);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem(),
// }
// console.log(currentOS);

// const path = require('path');
// console.log(path.sep);

// const filePath = path.join('/content/', 'subfolder', 'test.txt');
// console.log(filePath);

// const base = path.basename(filePath);
// console.log(base);

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

// const { readFileSync, writeFileSync } = require('fs');
// const fs = require('fs');
// fs.read

// const first = readFileSync('./content/first.txt', 'utf8');
// const second = readFileSync('./content/second.txt', 'utf8');

// console.log(first, second);

// writeFileSync('./content/result-sync.txt',
//     `here is the result: ${first}, ${second}`,
//     {flag:'a'}
// );

// const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf8', (err, result) => {
//     if (err) {
//         console.log(err)
//         return 
//     } 
//     const first = result;
//     readFile('./content/second.txt', 'utf8', (err, result) => {
//         if (err) {
//             console.log(err)
//             return 
//         } 
//         const second = result;
//         writeFile(
//             './content/result-async.txt',
//             `Here is the result: ${first}, ${second}`,
//             (err, result) => {
//                 if (err) {
//                     console.log(err);
//                 } else {
//                     console.log(result);
//                 }
//             }
        
//         );
//     })
// })

// const http = require('http')

// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.end('Welcome to our homepage')
//     }
//     if (req.url === '/about') {
//         res.end('Here is our short hisory')
//     }
//     res.end(
//         `<h1>OOPS!</h1>
//         <p>we cant seem to find a page u r looking for</p>
//         <a href="/">back home </a>`
//     )
// })
// server.listen(5000);

const _ = require('lodash')
const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items)
console.log(newItems);
