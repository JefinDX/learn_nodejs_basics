/**
 * Promise example
 */
// const fs = require('fs')
// function stats(file) {
//     return new Promise((resolve, reject) => {
//         fs.stat(file, (err, data) => {
//             if (err) {
//                 return reject(err)
//             }
//             resolve(data)
//         })
//     })
// }
// Promise.all([
//     stats('index.js'),
//     stats('calc.js'),
// ]).then((data) => console.log(data))
//     .catch((err) => console.log(err))


/**
 * Using "async" package
 */
// var async = require("async");
// const fs = require('fs')
// async.map(['index.js'], fs.stat, function (err, results) {
//     // results is now an array of stats for each file
//     if (err) {
//         console.log('error happened during reading the files')
//         return console.log(err)
//     }
//     console.log(results)
// })


/**
 * Reading file using callback
 */
// const fs = require('fs')
// console.log('start reading a file...')
// fs.readFile('file.md', 'utf-8', function (err, content) {
//     if (err) {
//         console.log('error happened during reading the file')
//         return console.log(err)
//     }
//     console.log(content)
// })
// console.log('end of the file')


/**
 * Higher order functions
 * Functions that can take other functions as arguments
 */
//  const numbers = [2, 4, 1, 5, 4]
// function isBiggerThanTwo(num) {
//     return num > 2
// }
// console.log(numbers.filter(isBiggerThanTwo))


/**
 * file read - synchronous
 */
// const fs = require('fs')
// let content
// try {
//     content = fs.readFileSync('calc.js', 'utf-8')
// } catch (ex) {
//     console.log(ex)
// }
// console.log(content)