const { readFileSync, writeFileSync } = require('fs');
 
function saveDataObject(dataObject, database = '../database.json') {
    writeFileSync(database, JSON.stringify(dataObject))
}
 
function loadDataObject(database = '../database.json') {
    const data = readFileSync(database)
 
    const FALLBACK_VALUE = '{}'
 
    return JSON.parse(data.byteLength > 0 ? data : FALLBACK_VALUE)
}
 
saveDataObject({ JavaScript: 'is fun 😻!' })
 
console.log(loadDataObject())