const fs = require('fs')
const path = require('path')
const request = require('request')

function saveWebpage(url, filePath) {
    return getWebpage(url, filePath)
        .then(writeFile)
}

function getWebpage(url) {
    return new Promise(function (resolve, reject) {
        request.get(url, function (err, response, body) {
            if (err) {
                return reject(err)
            }

            resolve(body)
        })
    })
}

function writeFile(fileContent) {
    let filePath = 'page.html'
    return new Promise(function (resolve, reject) {
        fs.writeFile(path.join(__dirname, filePath), fileContent, function (err) {
            if (err) {
                return reject(err)
            }

            resolve(filePath)
        })
    })
}

module.exports = {
    saveWebpage
}