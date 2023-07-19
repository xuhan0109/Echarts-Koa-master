const fs = require('fs')
module.exports = function getFileJsonData(filepath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath,'utf-8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}