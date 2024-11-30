const request = require('request-promise')

/**
* GET request with query string - sample
*/
const optionsGetWithQS = {
    method: 'GET',
    uri: 'https://jsonplaceholder.typicode.com/comments',
    json: true,
    qs: {
        postId: 3
    }
}
request(optionsGetWithQS)
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
    })


/**
* POST request sample
*/
// const optionsPost = {
//     method: 'POST',
//     uri: 'http://localhost:3000/users',
//     json: true,
//     body: {
//         name: 'bar',
//         age: 44
//     }
// }
// request(optionsPost)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })


/**
* GET request sample
*/
// const optionsGet = {
//     method: 'GET',
//     uri: 'https://dog.ceo/api/breeds/image/random',
//     json: true
// }
// request(optionsGet)
//     .then(function (response) {
//         console.log(response);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })
