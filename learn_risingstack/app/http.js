/**
 * Error handling - express js
 */
const express = require('express')
const app = express()
const port = 3000
app.get('/', (request, response) => {
    throw new Error('oooops')
})
app.use((err, request, response, next) => {
    console.log("first error handler");
    next(err)
})
app.use((err, request, response, next) => {
    console.log("second error handler");
    response.status(500).send('Something broke !')
})
app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
})


/**
 * using express package with middleware
 */
// const express = require('express')
// const app = express()
// const port = 3000
// app.use((request, response, next) => {
//     console.log(request.headers)
//     next()
// })
// app.use((request, response, next) => {
//     request.chance = Math.random()
//     next()
// })
// app.get('/', (request, response) => {
//     response.json({
//         chance: request.chance
//     })
// })
// app.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })


/**
 * using express package
 */
// const express = require('express')
// const app = express()
// const port = 3000
// app.get('/', (request, response) => {
//     response.send('Hello from Express!')
// })
// app.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })


/**
 * http module for your Node.js server
 */
// const http = require('http')
// const port = 3000
// const requestHandler = (request, response) => {
//     console.log(request.url)
//     response.end('Hello Node.js Server!')
// }
// const server = http.createServer(requestHandler)
// server.listen(port, (err) => {
//     if (err) {
//         return console.log('something bad happened', err)
//     }
//     console.log(`server is listening on ${port}`)
// })